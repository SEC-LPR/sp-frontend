const {
  merge
} = require('webpack-merge');

const {
  resolvePath,
  baseConfig
} = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
})
