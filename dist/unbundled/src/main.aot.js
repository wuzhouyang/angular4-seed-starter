import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import './assets/style/index.css';
if (process.env.ENV === 'prod' || process.env.ENV === 'aot') {
    enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.aot.js.map