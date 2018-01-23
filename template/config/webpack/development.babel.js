import webpack from 'webpack'
import sharedConfig from './shared'
import { settings } from './settings'

const config = Object.assign(
  {},
  sharedConfig,
  {
    devtool: 'source-map',

    devServer: {
      clientLogLevel: 'none',
      https: settings.dev_server.https,
      host: settings.dev_server.host,
      port: settings.dev_server.port,
      contentBase: 'public',
      compress: true,
      hot: true,
      stats: 'errors-only',
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      disableHostCheck: true,
      watchOptions: {
        ignored: /node_modules/,
      },
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
        },
      },
    },
  },
)

config.plugins.push(...[
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
])

export default config
