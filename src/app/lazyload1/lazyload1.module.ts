import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { Lazyload1Component } from './lazyload1.component'
import { LazyLoad1RoutingModule }from './lazyload1-routing.module'

@NgModule({
    declarations:[
        Lazyload1Component
    ],
    imports:[
        LazyLoad1RoutingModule,
        SharedModule
    ]
})
export class LazyLoad1Module{
    constructor(){}
}