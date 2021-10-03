const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//relative path to absolute path
const resolvePath = _path => path.resolve(__dirname, _path);

const baseConfig = {
  entry: resolvePath('../src/index.jsx'),
  output: {
    path: resolvePath('../dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx$/,
        use: "babel-loader"
      },
      {
        test: /\.svg$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
      title: 'ebay',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    }),
  ],
}

module.exports = {
  resolvePath,
  baseConfig
}
