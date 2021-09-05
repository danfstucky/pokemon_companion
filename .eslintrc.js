module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended"
  ],
  rules: {
    "no-console": "warn"
  },
  parserOptions: {
    "parser": "babel-eslint"
  }
}
