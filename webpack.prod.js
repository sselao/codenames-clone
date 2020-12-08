const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: '[name].[chunkhash:4].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Codenames',
      template: path.join(__dirname, './index.html'),
    }),
    new CleanPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename: '[name].[hash].css',
      // chunkFilename: '[id].[hash].css',
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('https://codenames-clone-api.herokuapp.com'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
};
