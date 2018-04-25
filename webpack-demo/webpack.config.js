const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [path.join(__dirname, 'src', 'main')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
          // presets: [
          //   ['env', {
          //     modules: false,
          //     targets: {
          //       browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
          //     },
          //   }],
          // ],
          // plugins: ['transform-runtime'],
        },

      },
    },
    {
      test: /\.san$/,
      include: /src/,
      use: [
        { loader: 'babel-loader?cacheDirectory=true' },
        { loader: 'san-webpack-loader' },
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
  devServer: {
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
