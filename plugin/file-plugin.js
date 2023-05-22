class FileListPlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      let filelist = 'In this build:\n\n';
      // 遍历所有编译过的资源文件，
      // 对于每个文件名称，都添加一行内容。
      const keys = Object.keys(compilation.assets);
      filelist += keys.reduce((pre, cur) => pre + cur, '');

      // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
      // eslint-disable-next-line no-param-reassign
      compilation.assets['filelist.md'] = {
        source() {
          return filelist;
        },
        size() {
          return filelist.length;
        },
      };

      callback();
    });
  }
}
module.exports = FileListPlugin;
