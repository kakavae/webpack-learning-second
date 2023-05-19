const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',

  entry: './app.js',

  devServer: {
    /* 默认将dist目录作为静态资源的目录 */
    static: path.resolve(__dirname, './dist'),
    /* 设置是否在服务器端压缩代码--服务器向浏览器传输的时候文件是压缩的，加快速度，
    响应头中就会有 Content-Encoding: gzip */
    compress: true,
    /* 配置端口号 */
    port: 3000,
    /* 配置响应的头部信息 */
    headers: {
      'X-Access-Token': 'abc'
    },
    /* 代理服务器 */
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        pathRewrite: {
          '^/api': '',
        }
      }
    },
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
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
}