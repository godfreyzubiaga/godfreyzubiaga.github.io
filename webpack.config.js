const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['react-hot-loader/patch', './src/frontend/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    host: '127.0.0.1',
    historyApiFallback: true,
  },
};
