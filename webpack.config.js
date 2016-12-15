switch (process.env.NODE_ENV) {
    //生产模式（aot）
    case 'prod':
        module.exports = require('./config/webpack.prod.js');
        break;
    //开发模式
    case 'dev':
    default:
        module.exports = require('./config/webpack.dev.js');
}