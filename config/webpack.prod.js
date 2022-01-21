const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "index.[hash].js",
    path: path.resolve(path.join(__dirname, '../'), "build"),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.js[x]?$/,
        enforce: "pre",
        use: [
          {
            loader: "eslint-loader",
            options: { fix: true },
          },
        ],
        include: path.resolve(__dirname, "./src/**/*.js"),
        exclude: /node_modules/,
      },
      {
        test: /\.sa?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.[hash].css" })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".es6"]
  }
};

module.exports = merge(commonConfig, prodConfig);