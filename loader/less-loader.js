// eslint-disable-next-line import/no-extraneous-dependencies
const less = require('less');

function loader(source) {
  const callback = this.async();
  const func = function (err, res) {
    const { css, map } = res;
    callback(null, css, map);
  };
  less.render(source, {
    sourceMap: {},
  }, func);
}

module.exports = loader;
