import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

import './assets/style/index.css'

if (process.env.ENV === 'prod' || process.env.ENV === 'aot') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);