import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
if (process.env.ENV === 'prod' || process.env.ENV === 'aot') {
}
else {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map