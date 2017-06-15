const path = require('path');

function resolve(dir){
  return path.join(__dirname,'..',dir)
}

let config = {
  entry: {
    app: './src/index.tsx',
    vendor: ['react','react-dom','react-router','mobx']
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      { 
         test: /\.tsx?$/, 
         loader: 'awesome-typescript-loader'
      },
      { 
        enforce: 'pre', 
        test: /\.js$/, 
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.json','.ts','.tsx','.css']
  }
};

module.exports = config;