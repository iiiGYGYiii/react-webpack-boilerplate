const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { mergeWithRules } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "prepend",
    },
  },
  plugins: "append",
})(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
});
