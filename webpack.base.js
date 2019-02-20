const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index.ts'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({ hash: true, title: 'Perfetto' }),
    new webpack.NamedModulesPlugin()
  ]
}
