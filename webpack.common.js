const path = require('path');

module.exports = {
  entry: {
    app: './js/Scroll.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/Scroll.js',
  },
};
