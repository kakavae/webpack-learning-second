const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintPlugin = require('eslint-webpack-plugin');
const TestPlugin = require('./plugin/test-plugin');
const FilePlugin = require('./plugin/file-plugin');

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  output: {
    /* 打包的文件的公共路径 */
    publicPath: '/',
    clean: true,
  },

  devServer: {
    /* 默认将dist目录作为静态资源的目录 */
    static: path.resolve(__dirname, './dist'),
<<<<<<< HEAD
    /* 设置是否在服务器端压缩代码--服务器向浏览器传输的时候文件是压缩的，加快速度，
    响应头中就会有 Content-Encoding: gzip */
    compress: true,
    /* 配置端口号 */
    port: 3000,
    /* 配置响应的头部信息 */
    headers: {
      'X-Access-Token': 'abc'
    },

    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        /* 路径重写 */
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
=======
>>>>>>> fixed

    /* 开启模块热替换 */
    hot: true,
    liveReload: true,

    /* 是否显示eslint报错的覆盖层 */
    client: {
      overlay: false,
    },
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
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      /* 对less资源使用自定义loader */
      {
        test: /\.less$/,
        use: [
          {
            loader: './loader/style-loader.js',
          },
          {
            loader: './loader/less-loader.js',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),

    /* eslint报错的时候在浏览器里面也会显示错误 */
    new ESLintPlugin(),
    new TestPlugin({
      name: 'plugin',
    }),
    new FilePlugin(),
  ],
};
