const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './app.js',

  output: {
    clean: true,
  },

  /* 1.eval */
  /* 每个模块使用 eval() 包裹，通过 //# sourceURL 在模块末尾添加模块来源，它不单独产生 .map 文件。它和其他模式不一样的地方是它依靠 sourceURL 来定位原始代码， 而其他所有选项都使用 source map 方式来定位。 */
  /* 由于会映射到转换后的代码，而不是映射到原始代码（没有从 loader 中获取 source map），所以不能正确的显示行数 */
  /* 默认的devtool: eval */

  // devtool: "eval",

  /* 2.source-map */
  /* source map 以 .map 文件的方式生成，通过 //# sourceMappingURL 在 bundle 末尾添加。 */
  /* 浏览器解析到bundle尾部的source map文件之后去指定位置加载文件 */
  /* source map 是一个信息文件，里面储存着位置信息。也就是说，转换后代码的每一个位置所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。 */
  /* 外部。可以查看错误代码准确信息和源代码的错误位置。 */
  // devtool: "source-map",

  /* 3.hidden-source-map 
  - 与 source-map 相同，但不会为 bundle 添加引用注释。如果你只想 source map 映射那些源自错误报告的错误堆栈跟踪信息，但不想为浏览器开发工具暴露你的 source map，这个选项会很有用。 */
  /* 外部 可以查看错误代码准确信息，但不能追踪源代码错误，只能提示到构建后代码的错误位置。 */
  // devtool: "hidden-source-map",

  /* 4. inline-source-map */
  /* 可以正确跟踪代码行数 没有生成 .map文件 ，而是以 base64 的形式插入到 sourceMappingURL 中： */
  // devtool: "inline-source-map",

  /* 5.eval-source-map
  没有生成 .map文件 ，而是在 eval函数 中，包括 sourceMappingURL */
  // devtool: "eval-source-map",

  /* 6.cheap-source-map */
  /* 可以查看错误代码准确信息和源代码的错误位置，但是忽略了具体的列 */
  /* 生成的map文件里面没有列的信息 */
  // devtool: 'cheap-source-map',

  /* 7.cheap-module-source-map 
  可以定位在loader转换之后的源代码，比如babel-loader转换，还有css-loader
  同时不用定位列出错的位置，可以加快打包的速度
  开发环境下推荐使用*/
  devtool: 'cheap-module-source-map',

  /* 注意，生产环境下不建议使用source-map，否则有暴露源码的风险 */

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