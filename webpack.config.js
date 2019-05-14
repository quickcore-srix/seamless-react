const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebfontPlugin = require("webfont-webpack-plugin").default;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        loader: "url-loader",
        test: /\.(svg|eot|ttf|woff|woff2)?$/
      }
    ]
  },
  devServer: {
    // prevents GET error when page reloaded
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/", "index.html"),
      filename: "./index.html"
    }),
    new WebfontPlugin({
      files: path.resolve(__dirname, "../fixtures/svg-icons/**/*.svg"),
      dest: path.resolve(__dirname, "../fixtures/css/fonts"),
      destTemplate: path.resolve(__dirname, "../fixtures/css")
    })
  ]
};
