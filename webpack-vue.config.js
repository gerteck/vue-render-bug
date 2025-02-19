const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  target: 'node',  // Node environment since you're using `require`
  entry: './src/components/index.js',  // Entry point for your Vue components
  externals: {
    vue: 'Vue',
  },
  output: {
    filename: 'vue-components.bundle.js',  // Bundle your Vue components into this file
    path: path.resolve(__dirname, 'dist'),  // Output directory for bundled components
    library: 'VueComponents',  // Expose the components as a global variable
    libraryTarget: 'umd',  // Expose the library for both client and node environments
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',  // Process .vue files with Vue Loader
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel to transpile modern JavaScript
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
};
