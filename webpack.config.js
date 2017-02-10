module.exports = {
  entry: __dirname + '/src/js/client.js',
  output: {
    path: __dirname + '/src/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}