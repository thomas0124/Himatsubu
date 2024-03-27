# Ideaxtech Hackthon

## 📚 Rule

### Commit Message

```
feat: 新しい機能
fix: バグの修正
docs: ドキュメントのみの変更
refactor: 仕様に影響がないコード改善(リファクタ)
chore: ビルド、補助ツール、ライブラリ関連
```

### Branch Name

```
feat/機能名
fix/修正箇所
docs/ドキュメント名
refactor/機能名
chore/機能名

ex) feat/add_login
```


## Stacks
- Remix
- TypeScript
- husky
- ESLint
- Prettier
- GitHub Actions


# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/server`
- `build/client`
