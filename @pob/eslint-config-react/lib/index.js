'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    './rules/expert', // reapply expert: eslint-config-airbnb/rules/react modifies no-underscore-dangle
    './rules/react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
      },
    },
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['jsx'] }],
  },
};
