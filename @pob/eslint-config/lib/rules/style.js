'use strict';

module.exports = {
  rules: {
    // changed properties: 'never' to properties: 'always' ; true to 'ignoreDestructuring': false
    // http://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'always', ignoreDestructuring: false }],

    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always'],

    // https://github.com/prettier/eslint-config-prettier#curly
    // prettier doesn't enforce {} with multiline
    curly: ['error', 'multi-line'],

    // https://github.com/prettier/eslint-config-prettier#quotes
    // prettier doesn't change backtick to single
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    /* disabled rules */

    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',

    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',
  },
};
