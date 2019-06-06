/* eslint-disable import/no-extraneous-dependencies */
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('./tailwind.js'),
    autoprefixer(),
  ],
};
