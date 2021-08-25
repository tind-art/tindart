/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, './.env'),
});
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // entry point of our app
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: process.env.NODE_ENV,
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   // enable HMR on the devServer
  //   hot: true,
  //   // match the output path
  //   contentBase: path.resolve(__dirname, './dist'),
  //   // match the output 'publicPath'
  //   publicPath: '/',
  //   // fallback to root for other urls
  //   historyApiFallback: true,

  //   inline: true,

  //   // Sets server CORS policy to accept incoming requests from different ports and hosts.
  //   headers: { 'Access-Control-Allow-Origin': '*' },
  //   /**
  //    * proxy is required in order to make api calls to
  //    * express server while using hot-reload webpack server
  //    * routes api fetch requests from localhost:8080/api/* (webpack dev server)
  //    * to localhost:3000/api/* (where our Express server is running)
  //    */
  //   proxy: {
  //     '/api/**': {
  //       target: 'http://localhost:3000',
  //       secure: false,
  //     },
  //     '/assets/**': {
  //       target: 'http://localhost:3000',
  //       secure: false,
  //     },
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.((sa|s?c)ss)$/i,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  resolve: {
    // Enable importing JS/JSX/TS/TSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
