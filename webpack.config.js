let webpack = require("webpack");
module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout:500,
        poll:2000,
        ignored:/nodemodules/,
    },
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
				{ exclude: /node_modules/,loader: 'babel',
					query: {
						presets: ['react', 'es2015', 'stage-1']
					}
				},
                { test: /\.json$/, loader: 'json' },
        {test: /\.css$/, loader: 'css'}

   ],
      plugins: [
          new webpack.DefinePlugin({
              'process.env': {
                  NODE_ENV: JSON.stringify('production')
              }
          }), new webpack.optimize.UglifyJsPlugin()
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }


};
