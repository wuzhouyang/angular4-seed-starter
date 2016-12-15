import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes:Routes=[
	{
		path:'lazyload-1',
		loadChildren:'es6-promise-loader?,[name]!./lazyload1/lazyload1.module#LazyLoad1Module',
	},
	{
		path:'lazyload-2',
		loadChildren:'es6-promise-loader?,[name]!./lazyload2/lazyload2.module#LazyLoad2Module',
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