//主入口文件
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { platformBrowser } from '@angular/platform-browser'
import { enableProdMode } from '@angular/core'

import { AppModule } from './app/app.module'

import './assets/styles/index.scss'

import './favicon.ico'

platformBrowserDynamic().bootstrapModule(AppModule)