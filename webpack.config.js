const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

 const root = path.resolve(__dirname, "./");

module.exports = {
  mode: "production",
  entry: path.join(root, "main"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  optimization: {
    minimize: true,
    //mangleExports: false, // Works if this is uncommented
    minimizer: [
      new TerserPlugin({
        exclude: [
            /.*\.json/ //But I would have expected config.json to be unmangled with this?
        ], 
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
