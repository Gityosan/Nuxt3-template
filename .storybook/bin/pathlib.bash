#!/bin/bash
# set -ue 環境からのsourceを想定

# $1: src array name
# $2: dest array name
# 配列をコピーする。
array_copy(){
	eval "$2=(\"\${$1[@]:0}\")"
}

# $1: string
# $2: needle string
# 部分文字列を探す。見つからなければ-1を返す。
str_pos(){
	local i
	local n=$(( ${#1} - ${#2} + 1 ))
	for (( i = 0 ; i < n ; i++ )) ; do
		if [[ "${1:$i:${#2}}" == "$2" ]] ; then
			echo "$i"
			return 0
		fi
	done
	echo "-1"
}

# $1: string
# $2: delimiter string
# $3: dest array name
# 文字列を分割して配列に格納する。
# 空文字列は空の配列になる。
# デリミタは空文字列はダメ。
str_split(){
	local str=$1
	local __a=()
	if [[ "$2" == "" ]] ; then
		echo "delimiter is empty string" >&2
		return 1
	fi
	if [[ ${#str} -gt 0 ]] ; then
		while true ; do
			local pos="$(str_pos "$str" "$2")"
			if [[ $pos -eq -1 ]] ; then
				__a+=("$str")
				break
			fi
			__a+=("${str:0:$pos}")
			str="${str:$(( pos + ${#2} ))}"
		done
	fi
	array_copy "__a" "$3"
}

# $1: array name
# $2: glue
# 配列を結合した文字列を返す。
array_join(){
	local __a=()
	local i
	local str=""
	array_copy "$1" "__a"
	for (( i = 0 ; i < ${#__a[@]} ; i++ )) ; do
		if [[ $i -gt 0 ]] ; then
			str="$str$2"
		fi
		str="$str${__a[$i]}"
	done
	echo "$str"
}

# $1: path string
# パス文字列が絶対パスかどうかを返り値で返す。
path_is_absolute(){
	[[ "${1:0:1}" == "/" ]]
}

# $1: base path string
# $2...: append path strings
# パス文字列を追加する。
# baseの末尾に[/]が無ければ追加する。
# 追加するパスは絶対パスはダメ。
path_append(){
	local path=$1
	shift
	while [[ $# -ge 1 ]] ; do
		if path_is_absolute "$1" ; then
			echo "absolute path can't append: $1" >&2
			return 1
		fi
		if [[ "$path" == "" ]] ; then
			path="$1"
		else
			path="${path%/}/$1"
		fi
		shift
	done
	echo "$path"
}

# $1: path string
# $2: dest array name
# パス文字列をパス要素配列に分割する。
# 絶対パスの場合、配列の第一要素は[/]になる。
# 例
# a/b//c/ => [ "a", "b", "", "c", "" ]
# /a/b//c => [ "/", "a", "b", "", "c"]
# 結果の配列は、path_array_joinで元のパス文字列に戻る。
path_split(){
	local __a2=() # 呼び出し先での衝突回避
	if path_is_absolute "$1" ; then
		str_split "${1:1}" "/" "__a2"
		__a2=("/" "${__a2[@]:0}")
	else
		str_split "$1" "/" "__a2"
	fi
	array_copy "__a2" "$2"
}

# $1: array name
# パス要素配列を結合してパス文字列にする。
# パス要素配列についてはpath_splitを参照。
path_array_join(){
	local __a2=() # 呼び出し先での衝突回避
	array_copy "$1" "__a2"
	if [[ "${__a2[@]:0:1}" == "/" ]] ; then
		# 先頭要素を剥がす
		echo -n "/"
		__a2=("${__a2[@]:1}")
	fi
	array_join "__a2" "/"
}

# $1: path string
# パス文字列を正規化する。
# 連続する[/]は1つにする。
# [.]は除去する。
# [..]はできるだけ除去する。
path_standardize(){
	local i=0
	local src_items=()
	local ret_items=()
	path_split "$1" "src_items"
	while [[ $i -lt ${#src_items[@]} ]] ; do
		local item=${src_items[$i]}
		if [[ "$item" == "" || "$item" == "." ]] ; then
			# 何もしない
			:
		elif [[ "$item" == ".." && ${#ret_items[@]} -gt 0 ]] ; then
			# ..が来ていて、左側に要素がある
			local n=${#ret_items[@]}
			local last=${ret_items[$n-1]}
			if [[ "$last" == "/" ]] ; then
				# ルートの/は..を飲み込む。
				:
			elif [[ "$last" == ".." ]] ; then
				# ..に..は連結する
				ret_items+=("..")
			else
				# 通常は末尾を食う
				ret_items=("${ret_items[@]:0:$n-1}")
			fi
		else
			# 付けたす
			ret_items+=("$item")
		fi
		# 次に進む
		i=$(( i + 1 ))
	done
	path_array_join "ret_items"
}

# $1: path string
# パス文字列を正規化した絶対パスにして返す。
# 相対パスだった場合、カレントディレクトリを用いて絶対化する。
path_get_absolute(){
	local path=$1
	if ! path_is_absolute "$1" ; then
		path=$(path_append "$(pwd)" "$path")
	fi
	path_standardize "$path"
}

# $1: from path string
# $2: to path string
# fromパスからtoパスへの相対パスを求める。
# 結果の相対パスをfromに結合すると、toを示す。
path_get_relative(){
	local from_items=()
	local to_items=()
	path_split "$(path_get_absolute "$1")" "from_items"
	path_split "$(path_get_absolute "$2")" "to_items"

	local i
	# 一致する限り進む
	for (( i = 0 ; i < ${#from_items[@]} && i < ${#to_items[@]} ; i++ )) ; do
		if [[ "${from_items[$i]}" != "${to_items[$i]}" ]] ; then
			break
		fi
	done
	local start_i=$i
	# fromの残りを..の繰り返しに変換する
	local ret_items=()
	for (( i = $start_i ; i < ${#from_items[@]} ; i++ )) ; do
		ret_items+=("..")
	done
	# toの残りをつなげる
	for (( i = $start_i ; i < ${#to_items[@]} ; i++ )) ; do
		ret_items+=("${to_items[$i]}")
	done
	path_array_join "ret_items"
}