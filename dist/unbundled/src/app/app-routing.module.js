import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routers = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forRoot(routers)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] },
    ];
    AppRoutingModule.ctorParameters = [];
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map