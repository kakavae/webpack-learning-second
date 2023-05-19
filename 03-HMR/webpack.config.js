const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',

  entry: './app.js',

  output: {
    /* 打包的文件的公共路径 */
    publicPath: '/',
  },

  devServer: {
    /* 默认将dist目录作为静态资源的目录 */
    static: path.resolve(__dirname, './dist'),

    /* 开启模块热替换 */
    hot: true,
    liveReload: true
  },

  output: {
    clean: true,
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]
}