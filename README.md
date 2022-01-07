# vue3 + TypeScript + pinia + tailwindcss

## create project

```shell
> vue -V
@vue/cli 4.5.15
> vue create mysite
> cd mysite
```

## add pinia

- typescriptのバージョンが、vue create後は、`"typescript": "~4.1.5"`になっていますが、これだとpiniaインストール時にエラーになるので、`4.5.4`に上げます。
- [pinia](https://pinia.vuejs.org/)をインストールします。

```shell
> npm i pinia
```

## add tailwindcss

- [tailwindcss](https://tailwindcss.com/)を、基本[ここ](https://tailwindcss.com/docs/guides/vite)の通りに、インストール・設定します。
- ただ、私はviteを使っておらず、vue createでvue 3+typescriptを選択してプロジェクト作成したのですが、上記の通りにやると、下記エラーが出ます。

```shell
Syntax Error: Error: PostCSS plugin tailwindcss requires PostCSS 8.
Migration guide for end-users:
https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users
```

- 今度viteでやってみますが、上記エラーの解決策は[ここ](https://qiita.com/morimorig3/items/fb29bd4d0318b0909d0b)に記載がありまして、このとおりにやったらOKでした。

```shell
> npm uninstall tailwindcss postcss autoprefixer
> npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

- 下記のように、`tailwind.config.js`に、[darkModeの設定](https://tailwindcss.com/docs/dark-mode)を追加すると、簡単にダークモードを反映できました。

```tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- iconとUIコンポーネントは、[Heroicons](https://github.com/tailwindlabs/heroicons)と、[headless ui](https://headlessui.dev/)を使います。

```shell
> npm i @headlessui/vue @heroicons/vue
```









