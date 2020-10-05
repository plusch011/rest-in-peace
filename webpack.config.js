const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader?name=assets/fonts/webfonts/[name].[ext]'
        },
        {
          loader: 'file-loader?name=assets/fonts/Roboto/[name].[ext]'
        }
      ]
    }],
  }
};
