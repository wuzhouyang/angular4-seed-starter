import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { Lazyload2Component } from './lazyload2.component'
import { LazyLoad2RoutingModule }from './lazyload2-routing.module'

@NgModule({
    declarations:[
        Lazyload2Component
    ],
    imports:[
        LazyLoad2RoutingModule,
        SharedModule
    ]
})
export class LazyLoad2Module{
    constructor(){}
}