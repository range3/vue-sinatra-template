import webpack from 'webpack'
import sharedConfig from './shared'

const config = Object.assign(
  {},
  sharedConfig,
  {})

config.plugins.push(...[
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    compressor: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  }),
])

export default config
