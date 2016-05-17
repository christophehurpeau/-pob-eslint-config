module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        './rules/style',
    ].map(require.resolve),
    parser: 'babel-eslint'
};
