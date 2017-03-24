import { Component } from '@angular/core'

@Component({
    selector:'wzy-ll1',
    template:`
        <p>这是lazyload加载的第一个模块!</p>
        <p>this is the first module with lazyload!</p>
        <div class="llimage"></div>
    `,
    styleUrls:[
        './lazyload.scss'
    ]
})
export class Lazyload1Component{
    constructor(){}
}