import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { isProd, settings } from './settings'

export default {
  entry: {
    main: [
      './client/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../public'),
    publicPath: settings.publicPath,
    filename: 'assets/js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                { loader: 'css-loader', options: { minimize: isProd, sourceMap: false } },
                { loader: 'postcss-loader', options: { sourceMap: false } },
                { loader: 'resolve-url-loader', options: { sourceMap: false } },
                { loader: 'sass-loader', options: { sourceMap: false } },
              ],
            }),
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                { loader: 'css-loader', options: { minimize: isProd, sourceMap: false } },
                { loader: 'postcss-loader', options: { sourceMap: false } },
                { loader: 'resolve-url-loader', options: { sourceMap: false } },
                { loader: 'sass-loader', options: { sourceMap: false } },
              ],
            }),
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: isProd, sourceMap: false } },
            { loader: 'postcss-loader', options: { sourceMap: false } },
            { loader: 'resolve-url-loader', options: { sourceMap: false } },
            { loader: 'sass-loader', options: { sourceMap: false } },
          ],
        }),
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/images/[name]-[hash:7].[ext]',
          },
        }],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/fonts/[name]-[hash:7].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].css',
      disable: !isProd,
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: isProd,
      },
      hash: true,
      template: './client/index.html',
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
}
