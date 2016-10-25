var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/app/app-routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/common/src/location/location';
import * as import4 from '@angular/router/src/url_tree';
import * as import5 from '@angular/router/src/router_outlet_map';
import * as import6 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import8 from '@angular/common/src/location/platform_location';
import * as import9 from '@angular/common/src/location/location_strategy';
import * as import10 from '@angular/core/src/linker/compiler';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import14 from '@angular/router/src/router_config_loader';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/core/src/application_tokens';
import * as import17 from '@angular/core/src/i18n/tokens';
var AppRoutingModuleInjector = (function (_super) {
    __extends(AppRoutingModuleInjector, _super);
    function AppRoutingModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ROUTER_CONFIGURATION_3", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_3 == null)) {
                (this.__ROUTER_CONFIGURATION_3 = {});
            }
            return this.__ROUTER_CONFIGURATION_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_LocationStrategy_4", {
        get: function () {
            if ((this.__LocationStrategy_4 == null)) {
                (this.__LocationStrategy_4 = import2.provideLocationStrategy(this.parent.get(import8.PlatformLocation), this.parent.get(import9.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_3));
            }
            return this.__LocationStrategy_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_Location_5", {
        get: function () {
            if ((this.__Location_5 == null)) {
                (this.__Location_5 = new import3.Location(this._LocationStrategy_4));
            }
            return this.__Location_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_UrlSerializer_6", {
        get: function () {
            if ((this.__UrlSerializer_6 == null)) {
                (this.__UrlSerializer_6 = new import4.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_RouterOutletMap_7", {
        get: function () {
            if ((this.__RouterOutletMap_7 == null)) {
                (this.__RouterOutletMap_7 = new import5.RouterOutletMap());
            }
            return this.__RouterOutletMap_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_NgModuleFactoryLoader_8", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_8 == null)) {
                (this.__NgModuleFactoryLoader_8 = new import6.SystemJsNgModuleLoader(this.parent.get(import10.Compiler), this.parent.get(import6.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ROUTES_9", {
        get: function () {
            if ((this.__ROUTES_9 == null)) {
                (this.__ROUTES_9 = [[{
                            path: '',
                            redirectTo: '',
                            pathMatch: 'full'
                        }
                    ]]);
            }
            return this.__ROUTES_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_Router_10", {
        get: function () {
            if ((this.__Router_10 == null)) {
                (this.__Router_10 = import2.setupRouter(this.parent.get(import11.ApplicationRef), this._UrlSerializer_6, this._RouterOutletMap_7, this._Location_5, this, this._NgModuleFactoryLoader_8, this.parent.get(import10.Compiler), this._ROUTES_9, this._ROUTER_CONFIGURATION_3));
            }
            return this.__Router_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_ActivatedRoute_11", {
        get: function () {
            if ((this.__ActivatedRoute_11 == null)) {
                (this.__ActivatedRoute_11 = import2.rootRoute(this._Router_10));
            }
            return this.__ActivatedRoute_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_12", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_12 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_12 = [import2.initialRouterNavigation(this._Router_10, this._ROUTER_CONFIGURATION_3)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRoutingModuleInjector.prototype, "_LOCALE_ID_13", {
        get: function () {
            if ((this.__LOCALE_ID_13 == null)) {
                (this.__LOCALE_ID_13 = 'en-US');
            }
            return this.__LOCALE_ID_13;
        },
        enumerable: true,
        configurable: true
    });
    AppRoutingModuleInjector.prototype.createInternal = function () {
        this._ROUTER_FORROOT_GUARD_0 = import2.provideForRootGuard(this.parent.get(import12.Router, null));
        this._RouterModule_1 = new import2.RouterModule(this._ROUTER_FORROOT_GUARD_0);
        this._AppRoutingModule_2 = new import1.AppRoutingModule();
        return this._AppRoutingModule_2;
    };
    AppRoutingModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_0;
        }
        if ((token === import2.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import1.AppRoutingModule)) {
            return this._AppRoutingModule_2;
        }
        if ((token === import2.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_3;
        }
        if ((token === import9.LocationStrategy)) {
            return this._LocationStrategy_4;
        }
        if ((token === import3.Location)) {
            return this._Location_5;
        }
        if ((token === import4.UrlSerializer)) {
            return this._UrlSerializer_6;
        }
        if ((token === import5.RouterOutletMap)) {
            return this._RouterOutletMap_7;
        }
        if ((token === import13.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_8;
        }
        if ((token === import14.ROUTES)) {
            return this._ROUTES_9;
        }
        if ((token === import12.Router)) {
            return this._Router_10;
        }
        if ((token === import15.ActivatedRoute)) {
            return this._ActivatedRoute_11;
        }
        if ((token === import16.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_12;
        }
        if ((token === import17.LOCALE_ID)) {
            return this._LOCALE_ID_13;
        }
        return notFoundResult;
    };
    AppRoutingModuleInjector.prototype.destroyInternal = function () {
    };
    return AppRoutingModuleInjector;
}(import0.NgModuleInjector));
export var AppRoutingModuleNgFactory = new import0.NgModuleFactory(AppRoutingModuleInjector, import1.AppRoutingModule);
//# sourceMappingURL=app-routing.module.ngfactory.js.map