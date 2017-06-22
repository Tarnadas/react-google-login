const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'google-login.js',
    libraryTarget: 'umd',
    library: 'GoogleLogin',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ["env", {
              "targets": {
                "browsers": [
                  "last 3 versions"
                ]
              },
              "modules": false,
              "useBuiltIns": true,
              "debug": true
            }],
            ["react"]
          ]
        }
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  ],
};
