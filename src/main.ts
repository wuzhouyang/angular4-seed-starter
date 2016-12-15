//主入口文件
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'

import { AppModule } from './app/app.module'

import './assets/styles/index.scss'

import './favicon.ico'

if (process.env.NODE_ENV === 'prod') {
    enableProdMode()
}
platformBrowserDynamic().bootstrapModule(AppModule);


