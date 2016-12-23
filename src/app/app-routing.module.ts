import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes:Routes=[
	{
		path:'lazyload-1',
		loadChildren:'./lazyload1/lazyload1.module#LazyLoad1Module',
	},
	{
		path:'lazyload-2',
		loadChildren:'./lazyload2/lazyload2.module#LazyLoad2Module',
	}
]
@NgModule({
	imports:[
		RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule
	]
})
export class AppRoutingModule{}