module.exports = {
 'extends': 'airbnb',
 'parser': 'babel-eslint',
 'env': {
   'browser': true,
   'node': true,
   'es6': true,
   'mocha': true,
   'jquery': true,
 },
 'globals': {},
 'plugins': ['react'],
 'rules': {
   'camelcase': 'off',
   'func-names': ['error', 'never'],
   'strict': 'off',
   'react/prop-types': 'off',
   'max-len': ['error', { 'code': 210 }],
   'class-methods-use-this': 'off',
   'react/prefer-stateless-function': 'off',
   'radix': ['error', 'as-needed'],
   'no-mixed-operators': ['error', { 'allowSamePrecedence': true }]
 }
}
