module.exports = {
  rules: {
    // added rules
    camelcase: [2, { properties: 'always' }],

    // changed rules
    'no-unused-vars': [2, { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'object-shorthand': [2, 'always'],

    // disabled rules
    'no-else-return': 'off', // http://eslint.org/docs/rules/no-else-return
  },
};
