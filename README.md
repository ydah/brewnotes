# Brewnotes

ビールと醸造に関する記事や醸造記録を公開するサイト。公開先は `https://ydah.github.io/brewnotes/`。

## 開発

Node.js 22.12.0 以上が必要。

```sh
npm install
npm run dev
```

開発サーバーは `http://localhost:4321/brewnotes/`。変更後は次のコマンドで確認する。

```sh
npm run check
npm run build
```

## 記事を追加する

`src/content/notes/` に Markdown を置く。ファイル名は小文字の英数字とハイフンを使う（例: `mash-temperature.md`）。本文の最初に `# タイトル` を書く。公開 URL は `/brewnotes/<ファイル名>/`。

- `[[file-name]]` または `[[file-name|表示テキスト]]` で関連記事にリンクできる。
- 本文の `#tag` からタグページが作られる。
- `draft: true` を frontmatter に書くと、本番ビルドから除外される。
- `created` / `updated` はコミット時のフックが補完・更新する。

記事の書き方と醸造記録の方針は [CLAUDE.md](CLAUDE.md) を参照。

## 公開

`main` への push で GitHub Pages にデプロイされる。通常のビルドと GitHub Actions はどちらも `/brewnotes` を base path に使う。`dist/` と `public/pagefind/` は生成物のためコミットしない。
