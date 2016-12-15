import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import { Lazyload2Component } from './lazyload2.component'

const routes:Routes=[
    {
        path:'',
        component:Lazyload2Component
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
export class LazyLoad2RoutingModule{
    constructor(){}
}