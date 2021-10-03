const {
  merge
} = require('webpack-merge');

const {
  resolvePath,
  baseConfig
} = require('./webpack.base.conf');


const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
})
