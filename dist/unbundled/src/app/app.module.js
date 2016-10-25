import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    providers: [],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        AppRoutingModule,
                    ],
                    declarations: [
                        AppComponent
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map