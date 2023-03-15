const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "_bundles"),
    filename: "reactPdfHighlight.js",
    libraryTarget: "umd",
    library: "pdfHighlight",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
