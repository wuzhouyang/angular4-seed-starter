import { NgModule , ModuleWithProviders } from '@angular/core'

//核心模块，可在此配置全局服务
//core module,you can provide some global services here
@NgModule({
    providers:[]
})
export class CoreModule{
    static forRoot():ModuleWithProviders{
        return{
            ngModule:CoreModule
        }
    }
}