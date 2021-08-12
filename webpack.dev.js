const { mergeWithRules } = require("webpack");
const common = require("./webpack.common.js");

module.exports = mergeWithRules({
  module:{
    rules:{
      test: "match",
      use: "prepend",
    },
  },
})(common,{
  mode: "development",
  devtool: "inline-source-map",
  devServer:{
    contentBase: "./build",
    port: 3000,
    historyApiFallback: true,
  },
  module:{
    rules:[
      {
        test: /\.s?css$/i,
        use:["style-loader"],
      },
    ],
  },
});
