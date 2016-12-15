var path = require('path');
//处理路径     __dirname表示当前文件所在的绝对路径
//_root相当于 当前所在目录的上级
var _root = path.resolve(__dirname, '..');

//根据传入的参数自动计算路径
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;