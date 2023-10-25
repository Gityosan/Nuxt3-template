## 説明

storybookに関連するshell script群を定義します

### 各ファイルの概要

- create.bash

  - `bash tools/storybook.create.bash \<input_folder_path\> \<output_folder_path\>`の形式で利用します。
  - \<input_folder_path\> の初期値は`/src/assets/base_components`です。
  - \<output_folder_path\> の初期値は`\<input_folder_path\>の値`です。

- pathlib.bash

  - 相対パスから絶対パスを求めるrealpathというshell組み込み関数があるが、二つの異なるパス間の相対パスを求める`--relative-to`オプションがMacOSでは使えないため、代替関数をこのファイルで定義している。下記のように呼び出す。

  ```bash
    script_dir=$(cd "$(dirname "$0")"; pwd)
    PATH="$PATH:$script_dir"
    source pathlib.bash
  ```
