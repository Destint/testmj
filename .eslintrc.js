module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: ['html', 'vue'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    semi: 'off',
    'arrow-parens': 0,
    'array-callback-return': 0,
    curly: 1,
    'no-void': 0,
    'no-eval': 2,
    'no-unused-vars': [
      'warn',
      { vars: 'local', args: 'none', ignoreRestSiblings: false }
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'eol-last': 0,
    'space-before-function-paren': 0,
    'no-useless-escape': 0,
    'spaced-comment': 0,
    'arrow-spacing': 0,
    'no-multiple-empty-lines': 0,
    'brace-style': 'warn',
    quotes: 'warn',
    'padded-blocks': 0,
    camelcase: 'warn'
  }
};
