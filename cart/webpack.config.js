const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: 'development',
  devServer: {
    port: 8083
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes:{
        './CartIndex': './src/bootstrap.js'
      },
      shared: ['@faker-js/faker']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}