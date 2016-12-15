import { Component } from '@angular/core'

@Component({
    selector:'wzy-ll2',
    template:`
        <p>这是lazyload加载的第二个模块!</p>
        <p>this is the second module with lazyload!</p>
    `
})
export class Lazyload2Component{
    constructor(){}
}