module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-sequences': 'off',
    'no-unused-vars': 'warn',
    'no-case-declarations': 'off',
    'new-cap': 'off',
    'no-unused-expressions': 'warn',
  },
}
