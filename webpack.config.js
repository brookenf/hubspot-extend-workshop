const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/, // see how we match anything that ends in `.js`? Cool
  use: [{
    loader: 'babel-loader',
    options: { presets: ['@babel/preset-env'] } // this is one way of passing options
  }],
};

const postcss = {
    loader: 'postcss-loader',
    options: {
      plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
    }
  };

const config = {
  entry: {
    calendar: './public/calendar.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [javascript,  {
        test: /\.(css)$/,
        use: ['style-loader','css-loader']
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  
};

process.noDeprecation = true;

module.exports = config;
