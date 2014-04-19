bittool
=======

bittoolはshell上でBitcasaのファイルやディレクトリを操作するツールです。
Ruby 2.0で開発していますが、1.9でも動くと思います。

使い方
-
* bittool ls [ファイルorディレクトリ]
* bittool cat ファイル
* bittool info ファイルorディレクトリ

設定ファイル
--
~/.bittool.yaml が必要です。中身は

<code>token: 取得したトークン</code>

の１行です。

注意事項
--
1. 設定ファイルが必要です。
2. 本プログラムは無保証です。作者は本プログラムをサポートする 意志はありますが、プログラム自身のバグあるいは本プログラムの 実行などから発生するいかなる損害に対しても責任を持ちません。

License
--
New BSD Licenseです。
[Licenseファイル](LICENSE)
