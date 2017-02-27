//主入口文件
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { platformBrowser } from '@angular/platform-browser'
import { enableProdMode } from '@angular/core'

import { AppModule } from './app/app.module'
import { AppModuleNgFactory } from '../ngFactory/src/app/app.module.ngfactory'

import './assets/styles/index.scss'

import './favicon.ico'

if (process.env.NODE_ENV === 'prod') {
    enableProdMode()
    platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
} else {
    platformBrowserDynamic().bootstrapModule(AppModule)
}



