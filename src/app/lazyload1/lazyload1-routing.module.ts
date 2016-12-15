import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import { Lazyload1Component } from './lazyload1.component'

const routes:Routes=[
    {
        path:'',
        component:Lazyload1Component
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class LazyLoad1RoutingModule{
    constructor(){}
}