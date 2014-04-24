Bittool
=======

Bittoolはshell上で[Bitcasa](http://l.bitcasa.com/0CPI0V.V)のファイルやディレクトリを操作するツールです。
Ruby 2.0で開発していますが、1.9でも動くと思います。

使い方
-
* bittool ls [ディレクトリ]  
  指定されたディレクトリにあるファイル・ディレクトリを表示します。  
  ディレクトリの指定がなかった場合、Bitcasaの/ が指定されたものとして扱います。
* bittool cat ファイル  
  指定されたファイルの内容を表示します。
* bittool info ファイルorディレクトリ  
  指定されたファイルorディレクトリの情報を表示します。

設定ファイル
--
~/.bittool.yaml が必要です。中身は

<code>token: 取得したトークン</code>

の１行です。

注意事項
--
1. 設定ファイルが必要です。詳しくは[こちら](https://hiroaki0404.github.io/bittool/)から。
2. 本プログラムは無保証です。作者は本プログラムをサポートする 意志はありますが、プログラム自身のバグあるいは本プログラムの 実行などから発生するいかなる損害に対しても責任を持ちません。

License
--
New BSD Licenseです。
[Licenseファイル](LICENSE)
