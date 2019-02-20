const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = env =>
  merge(common, {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      port: 3333,
      historyApiFallback: {
        true: true,
        disableDotRule: true
      }
    }
  })
