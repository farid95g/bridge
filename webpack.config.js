// const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   devServer: {
//     port: 3000,
//     historyApiFallback: true,
//   },
//   entry: "./src/index.js",
//   output: {
//     filename: "index.js",
//     path: path.resolve(__dirname, "build"),
//     publicPath: './'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.js[x]?$/,
//         enforce: "pre",
//         use: [
//           {
//             loader: "eslint-loader",
//             options: { fix: true },
//           },
//         ],
//         include: path.resolve(__dirname, "./src/**/*.js"),
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.scss$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
//   resolve: {
//     extensions: ["", ".js", ".jsx", ".es6"]
//   }
// };
