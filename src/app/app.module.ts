import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
    providers:[
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }