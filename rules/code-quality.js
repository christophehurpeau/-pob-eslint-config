'use strict';

module.exports = {
  rules: {
    complexity: ['warn', { max: 6 }],
    'max-depth': ['warn', 6],
    'max-lines': [
      'error',
      {
        max: 200,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
  },
};
