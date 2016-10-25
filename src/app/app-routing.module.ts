import { NgModule } from '@angular/core'
import { RouterModule,Routes } from '@angular/router'

const routers:Routes=[
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(routers)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}