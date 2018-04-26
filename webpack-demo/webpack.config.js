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

// 无需编译打包的静态资源转移
const CopyWebpackPlugin = require('copy-webpack-plugin');


const devEnv = process.env.NODE_ENV !== 'production';
const webPath = devEnv ? 'http://127.0.0.1:4399/' : '';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { main: './index.js' },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: webPath,
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
    },
    {
      // 将图片字体文件转换为 base64 编码
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          // 将小于 10KB 的图片转换为成 Base64 的格式，写入JS。
          limit: 10240,
          outputPath: 'assets/',
          name: '[name].[hash:8].[ext]',
        },
      },
    },
    ],
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
      template: 'index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html'],
      // 日志输出到控制台
      verbose: true,
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([{
      from: 'static/*',
      to: 'dist/static/',
    }]),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },

  devtool: 'source-map',
  //  编译监控设置
  watchOptions: {
    // 防止误操作重复打包,500ms 内重复保存,
    aggregateTimeout: 500,
    // 每隔 1000ms 检测一次文件变动
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    compress: true,
    port: 4399,
    historyApiFallback: true,
    open: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
