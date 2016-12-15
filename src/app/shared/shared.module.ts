import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule,Http } from '@angular/http'
import { NgModule,ModuleWithProviders } from '@angular/core'

@NgModule({
    imports:[
        /* 引入一些此模块需要的其他模块 */
        /* import some module that the shared module needs */
    ],
    declarations:[
        /* 声明一些属于shared module的组件或指令，在其他模块导入的时候便会生效 */
        /* some shared component or directives */
    ],
    exports:[
        CommonModule,
        FormsModule,
        HttpModule
        /* 导出一些模块  这些模块是经常被使用的模块  其他模块导入shared module时便不用再次导入这些模块 */
        /* export some module that always be used */
    ]
})
export class SharedModule{
    static forRoot():ModuleWithProviders{
        return {
            ngModule:SharedModule
        }
    }
}