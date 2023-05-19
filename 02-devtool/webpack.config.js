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

    /* 设置是否在服务器端压缩代码--服务器向浏览器传输的时候文件是压缩的，加快速度，
    响应头中就会有 Content-Encoding: gzip */
    compress: true,

    /* 配置端口号 */
    port: 3000,

    /* 局域网内访问 ---  */
    host: '0.0.0.0',

    /* 配置响应的头部信息 */
    headers: {
      'X-Access-Token': 'abc'
    },

    /* 代理服务器 */
    /* 本地的请求先发给代理服务器，然后由代理服务器和服务器之间通信，本地再拿到代理服务器返回的结果 */
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        pathRewrite: {
          '^/api': '',
        }
      }
    },

    /* 开启https的两种方法 */
    // https: true,

    // http2: true,

    /* SPA应用的history模式刷新出错 */
    historyApiFallback: true,
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