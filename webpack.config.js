switch (process.env.NODE_ENV) {
    //not aot
    case 'prod':
        module.exports = require('./config/webpack.prod.js');
        break;
    //aot
    case 'aot':
        module.exports = require('./config/webpack.aot.js');
        break;
    //dev
    case 'dev':
    default:
        module.exports = require('./config/webpack.dev.js');
}
