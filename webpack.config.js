const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';

const optimization = {
  minimize: IS_PROD,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        ie8: false,
        ecma: 8,
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          drop_console: false
        },
        warnings: false,
        keep_classnames: true,
        keep_fnames: true
      }
    })
  ]
};

const rules = [{
  test: /\.(tsx?)$/,
  use: [{
    loader: 'ts-loader'
  }]
},
{
  test: /\.css$/i,
  use: [{
    loader: 'style-loader'
  }]
},
{
  test: /\.css$/i,
  use: [{
    loader: 'css-loader',
    options: {
      import: true
    }
  }]
},
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource'
},
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource'
}
];

module.exports = {
  devServer: {
    hot: !IS_PROD,
    static: './app',
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  entry: {
    'index': ['./src/index.tsx']
  },
  output: {
    path: path.join(__dirname, './app'),
    publicPath: '/',
    filename: './[name].js',
    library: 'appLibrary',
    libraryTarget: 'umd',
    chunkFilename: './index.js',
    globalObject: 'this'
  },
  plugins: [],
  optimization,
  module: {
    rules
  },
  performance: {
    hints: false
  },
  devtool: false,
  mode: IS_PROD ? 'production' : 'development'
};
