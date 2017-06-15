const webpack = require('webpack');
const base = require('./webpack.base');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV);

const env = process.env.NODE_ENV;

let prodConfig = {};

if (env === 'production'){
  prodConfig = Object.assign(base,{
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor','manifest']
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new ExtractTextPlugin('app.css'),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
  prodConfig.module.rules.push(
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }
  );
}

module.exports = prodConfig;
