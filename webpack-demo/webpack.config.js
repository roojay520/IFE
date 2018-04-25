const path = require('path');
// html 文件打包自动引入 js css
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除 dist 目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 修复开发环境与生产环境文件 hash 名不一致
const WebpackMd5Hash = require('webpack-md5-hash');
// css 分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// js 压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// css 压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devEnv = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { main: './src/index.js' },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 优化设置
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],

  },
  module: {
    rules: [{
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      use: {
        loader: 'babel-loader',
        options: {
        },

      },
    },
    {
      test: /\.(s?css)$/,
      use: [
        devEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    // css 分离到 dist/css 目录下
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      // 自动引入 css js 到 html
      inject: false,
      // 避免缓存 JS
      hash: true,
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html'],
      // 日志输出到控制台
      verbose: true,
    }),
    new WebpackMd5Hash(),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1',
    compress: true,
    port: 4399,
    historyApiFallback: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
