const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const javascript = {
  test: /\.(js)$/, 
  use: [{
    loader: 'babel-loader',
    options: { presets: ['@babel/preset-env'] }
  }],
};

const config = {
  mode: 'development',
  entry: {
    calendar: './public/calendar.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundled.js'
  },
  module: {
    rules: [javascript,  {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
  })],
  
};

module.exports = config;
