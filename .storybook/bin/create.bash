#!/bin/bash

# 引数の数をチェックし、引数が3つ以上の場合はエラーメッセージを出力して終了
if [ "$#" -ge 3 ]; then
  echo "Usage: $0 <input_folder_path> <output_folder_path>"
  exit 1
fi

# フォルダの相対パスを取得
input_folder_path=${1:-components}
output_folder_path=${2:-$input_folder_path}

# 絶対パスに変換
input_folder_absolute_path=$(realpath "$input_folder_path")
output_folder_absolute_path=$(realpath "$output_folder_path")

# output_folder_absolute_pathからinput_folder_absolute_pathへの相対パスを計算
script_dir=$(cd "$(dirname "$0")" || exit; pwd)
PATH="$PATH:$script_dir"
source pathlib.bash
from_output_to_input_relative_path=$(path_get_relative "$output_folder_absolute_path" "$input_folder_absolute_path")

# Vueファイルを再帰的に検索して処理
find "$input_folder_path" -type f -name "*.vue" | while read -r vue_file_path; do

  # ファイル名から拡張子を削除し、ファイル名を取得
  file_name=$(basename -- "$vue_file_path")
  file_name_no_ext="${file_name%.vue}"

  # UpperCamelCaseのファイル名を生成
  upper_camel_case_file_name=$(echo "$file_name_no_ext" | awk -F'[-_]' '{ for(i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2)); }1' OFS='')

  # 対応するstories.tsファイルのパスを生成
  vue_file="${vue_file_path#"$input_folder_path"}"
  stories_file_path="${output_folder_path}${vue_file%.*}.stories.ts"

  # 既に同名のstories.tsファイルが存在する場合はスキップ
  if [ -e "$stories_file_path" ]; then
    echo "Skip: $stories_file_path already exists."
    continue
  fi

  # Extract props section using awk
  props_output=$(awk '
  BEGIN { flag=0; key=""; value=""; nestLevel=0; print "{"; }

  /props: {/ { flag=1; nestLevel=1; }

  flag { 
    # Extract key only at nestLevel 2
    if ($1 ~ /^[a-zA-Z0-9]+:$/ && nestLevel == 2) {
      key = substr($1, 1, length($1)-1);
    }
    # Extract default value
    if ($1 ~ /^default:/) {
      value = $0;
      sub(/[[:space:]]*default:/, "", value);
      sub(/,.*$/, "", value);
      if (value != "") { printf "%*s%s: %s,\n", (nestLevel - 1) * 2, "", key, value; }
    }
    # Count braces to determine nest level and end of props section
    for(i=1; i<=length($0); i++) {
      char = substr($0, i, 1);
      if (char == "{") { nestLevel++; }
      if (char == "}") { nestLevel--; }
    }
    if (nestLevel == 0 && flag) exit;
  }
  END { print "  },"; }
  ' "$vue_file_path")

  if [[ -n $props_output ]]; then
    args=$props_output
  fi

  define_props_output=$(awk '
  BEGIN { flag=0; key=""; value=""; nestLevel=0; print "{"; }

  /defineProps.*\({/ { flag=1; }

  flag { 
    # Extract key only at nestLevel 1
    if ($1 ~ /^[a-zA-Z0-9]+:$/ && nestLevel == 1) {
      key = substr($1, 1, length($1)-1);
    }
    # Extract default value
    if ($1 ~ /^default:/) {
      value = $0;
      sub(/[[:space:]]*default:/, "", value);
      sub(/,.*$/, "", value);
      if (value != "") { printf "%*s%s:%s,\n", (nestLevel - 1) * 2, "", key, value; }
    }
    # Count braces to determine nest level and end of props section
    for(i=1; i<=length($0); i++) {
      char = substr($0, i, 1);
      if (char == "{") { nestLevel++; }
      if (char == "}") { nestLevel--; }
    }
    if (nestLevel == 0 && flag) exit;
  }
  END { print "  },"; }
  ' "$vue_file_path")

  if [[ -n $define_props_output ]]; then
    args=$define_props_output
  fi

  with_defaults_output=$(awk '
  BEGIN { flag=0; }
  /withDefaults\(/ { flag=1; next; }
  flag == 1 && /^[^,]+),/ { flag=2; next; }
  flag == 2 {
    print $0;
    if ($0 ~ /^[^}]+}/) {
      exit;
    }
  }
  ' "$vue_file_path")
  if [[ -n $with_defaults_output ]]; then
    args=$with_defaults_output
  fi

  # stories.tsファイルを生成
  cat > "$stories_file_path" <<EOL
import $upper_camel_case_file_name from '${from_output_to_input_relative_path:-.}/$file_name_no_ext.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof $upper_camel_case_file_name>;

const meta: Meta<typeof $upper_camel_case_file_name> = {
  title: '$upper_camel_case_file_name',
  component: $upper_camel_case_file_name,
  render: (args) => ({
    components: { $upper_camel_case_file_name },
    setup: () => ({ args }),
    template: "<$upper_camel_case_file_name v-bind='args' />",
  }),
  tags: ['autodocs'],
};

export const Default: Story = {
  args: $args
};

export default meta;
EOL

  echo "Created: $stories_file_path"
done