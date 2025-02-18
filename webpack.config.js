const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './index-server.js', // Adjust the entry point if needed
  output: {
    filename: 'bundleWithServer.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
