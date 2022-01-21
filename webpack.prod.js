const path = require("path");
const common = require("./config/webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");;

module.exports = merge(common, {
  mode: "production",
  devtool: "nosources-source-map",
  output: {
    filename: "index.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
  ],
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }
    ]
  }
});
