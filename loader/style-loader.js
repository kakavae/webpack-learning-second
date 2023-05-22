/* 将处理后的css字符串通过标签的形式插入到head中，这个js代码块会被webpack打包进模块中执行 */

function loader(source) {
  const style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style)
  `;
  return style;
}
module.exports = loader;
