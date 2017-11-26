module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      'warnForDuplicates': false
    },
    'cssnano': {}
  }
}