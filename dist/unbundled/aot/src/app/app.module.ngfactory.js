var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../../../src/app/app-routing.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/http/src/backends/browser_xhr';
import * as import21 from '@angular/http/src/base_response_options';
import * as import22 from '@angular/http/src/backends/xhr_backend';
import * as import23 from '@angular/http/src/base_request_options';
import * as import24 from '@angular/common/src/location/location';
import * as import25 from '@angular/router/src/url_tree';
import * as import26 from '@angular/router/src/router_outlet_map';
import * as import27 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import29 from './app.component.ngfactory';
import * as import30 from '@angular/core/src/application_tokens';
import * as import31 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import32 from '@angular/platform-browser/src/dom/events/key_events';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import35 from '@angular/common/src/location/platform_location';
import * as import36 from '@angular/common/src/location/location_strategy';
import * as import37 from '@angular/router/src/router';
import * as import38 from '@angular/core/src/console';
import * as import39 from '@angular/core/src/i18n/tokens';
import * as import40 from '@angular/core/src/error_handler';
import * as import41 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import42 from '@angular/platform-browser/src/dom/animation_driver';
import * as import43 from '@angular/core/src/render/api';
import * as import44 from '@angular/core/src/security';
import * as import45 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import46 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import47 from '@angular/http/src/interfaces';
import * as import48 from '@angular/http/src/http';
import * as import49 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import50 from '@angular/router/src/router_config_loader';
import * as import51 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [import29.AppComponentNgFactory], [import29.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_8", {
        get: function () {
            if ((this.__LOCALE_ID_8 == null)) {
                (this.__LOCALE_ID_8 = 'en-US');
            }
            return this.__LOCALE_ID_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_9", {
        get: function () {
            if ((this.__NgLocalization_9 == null)) {
                (this.__NgLocalization_9 = new import8.NgLocaleLocalization(this._LOCALE_ID_8));
            }
            return this.__NgLocalization_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_14", {
        get: function () {
            if ((this.__ApplicationRef_14 == null)) {
                (this.__ApplicationRef_14 = this._ApplicationRef__13);
            }
            return this.__ApplicationRef_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_15", {
        get: function () {
            if ((this.__Compiler_15 == null)) {
                (this.__Compiler_15 = new import12.Compiler());
            }
            return this.__Compiler_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_16", {
        get: function () {
            if ((this.__APP_ID_16 == null)) {
                (this.__APP_ID_16 = import30._appIdRandomProviderFactory());
            }
            return this.__APP_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_17", {
        get: function () {
            if ((this.__DOCUMENT_17 == null)) {
                (this.__DOCUMENT_17 = import4._document());
            }
            return this.__DOCUMENT_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_18", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_18 = new import13.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_19", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_19 = [
                    new import31.DomEventsPlugin(),
                    new import32.KeyEventsPlugin(),
                    new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_18)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_20", {
        get: function () {
            if ((this.__EventManager_20 == null)) {
                (this.__EventManager_20 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_19, this.parent.get(import33.NgZone)));
            }
            return this.__EventManager_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_21", {
        get: function () {
            if ((this.__DomSharedStylesHost_21 == null)) {
                (this.__DomSharedStylesHost_21 = new import15.DomSharedStylesHost(this._DOCUMENT_17));
            }
            return this.__DomSharedStylesHost_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_22", {
        get: function () {
            if ((this.__AnimationDriver_22 == null)) {
                (this.__AnimationDriver_22 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_23", {
        get: function () {
            if ((this.__DomRootRenderer_23 == null)) {
                (this.__DomRootRenderer_23 = new import16.DomRootRenderer_(this._DOCUMENT_17, this._EventManager_20, this._DomSharedStylesHost_21, this._AnimationDriver_22));
            }
            return this.__DomRootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_24", {
        get: function () {
            if ((this.__RootRenderer_24 == null)) {
                (this.__RootRenderer_24 = import34._createConditionalRootRenderer(this._DomRootRenderer_23, this.parent.get(import34.NgProbeToken, null)));
            }
            return this.__RootRenderer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_25", {
        get: function () {
            if ((this.__DomSanitizer_25 == null)) {
                (this.__DomSanitizer_25 = new import17.DomSanitizerImpl());
            }
            return this.__DomSanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_26", {
        get: function () {
            if ((this.__Sanitizer_26 == null)) {
                (this.__Sanitizer_26 = this._DomSanitizer_25);
            }
            return this.__Sanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_27", {
        get: function () {
            if ((this.__ViewUtils_27 == null)) {
                (this.__ViewUtils_27 = new import18.ViewUtils(this._RootRenderer_24, this._APP_ID_16, this._Sanitizer_26));
            }
            return this.__ViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_30", {
        get: function () {
            if ((this.__SharedStylesHost_30 == null)) {
                (this.__SharedStylesHost_30 = this._DomSharedStylesHost_21);
            }
            return this.__SharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_31", {
        get: function () {
            if ((this.__Title_31 == null)) {
                (this.__Title_31 = new import19.Title());
            }
            return this.__Title_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_32", {
        get: function () {
            if ((this.__BrowserXhr_32 == null)) {
                (this.__BrowserXhr_32 = new import20.BrowserXhr());
            }
            return this.__BrowserXhr_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_33", {
        get: function () {
            if ((this.__ResponseOptions_33 == null)) {
                (this.__ResponseOptions_33 = new import21.BaseResponseOptions());
            }
            return this.__ResponseOptions_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_34", {
        get: function () {
            if ((this.__XSRFStrategy_34 == null)) {
                (this.__XSRFStrategy_34 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_35", {
        get: function () {
            if ((this.__XHRBackend_35 == null)) {
                (this.__XHRBackend_35 = new import22.XHRBackend(this._BrowserXhr_32, this._ResponseOptions_33, this._XSRFStrategy_34));
            }
            return this.__XHRBackend_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_36", {
        get: function () {
            if ((this.__RequestOptions_36 == null)) {
                (this.__RequestOptions_36 = new import23.BaseRequestOptions());
            }
            return this.__RequestOptions_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_37", {
        get: function () {
            if ((this.__Http_37 == null)) {
                (this.__Http_37 = import5.httpFactory(this._XHRBackend_35, this._RequestOptions_36));
            }
            return this.__Http_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_38", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_38 == null)) {
                (this.__ROUTER_CONFIGURATION_38 = {});
            }
            return this.__ROUTER_CONFIGURATION_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_39", {
        get: function () {
            if ((this.__LocationStrategy_39 == null)) {
                (this.__LocationStrategy_39 = import6.provideLocationStrategy(this.parent.get(import35.PlatformLocation), this.parent.get(import36.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_38));
            }
            return this.__LocationStrategy_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_40", {
        get: function () {
            if ((this.__Location_40 == null)) {
                (this.__Location_40 = new import24.Location(this._LocationStrategy_39));
            }
            return this.__Location_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_41", {
        get: function () {
            if ((this.__UrlSerializer_41 == null)) {
                (this.__UrlSerializer_41 = new import25.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_42", {
        get: function () {
            if ((this.__RouterOutletMap_42 == null)) {
                (this.__RouterOutletMap_42 = new import26.RouterOutletMap());
            }
            return this.__RouterOutletMap_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_43", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_43 == null)) {
                (this.__NgModuleFactoryLoader_43 = new import27.SystemJsNgModuleLoader(this._Compiler_15, this.parent.get(import27.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_44", {
        get: function () {
            if ((this.__ROUTES_44 == null)) {
                (this.__ROUTES_44 = [[{
                            path: '',
                            redirectTo: '',
                            pathMatch: 'full'
                        }
                    ]]);
            }
            return this.__ROUTES_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_45", {
        get: function () {
            if ((this.__Router_45 == null)) {
                (this.__Router_45 = import6.setupRouter(this._ApplicationRef_14, this._UrlSerializer_41, this._RouterOutletMap_42, this._Location_40, this, this._NgModuleFactoryLoader_43, this._Compiler_15, this._ROUTES_44, this._ROUTER_CONFIGURATION_38));
            }
            return this.__Router_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_46", {
        get: function () {
            if ((this.__ActivatedRoute_46 == null)) {
                (this.__ActivatedRoute_46 = import6.rootRoute(this._Router_45));
            }
            return this.__ActivatedRoute_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_47", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_47 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_47 = [import6.initialRouterNavigation(this._Router_45, this._ROUTER_CONFIGURATION_38)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_47;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import37.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._AppRoutingModule_6 = new import7.AppRoutingModule();
        this._AppModule_7 = new import1.AppModule();
        this._ErrorHandler_10 = import4.errorHandler();
        this._ApplicationInitStatus_11 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER, null));
        this._Testability_12 = new import10.Testability(this.parent.get(import33.NgZone));
        this._ApplicationRef__13 = new import11.ApplicationRef_(this.parent.get(import33.NgZone), this.parent.get(import38.Console), this, this._ErrorHandler_10, this, this._ApplicationInitStatus_11, this.parent.get(import10.TestabilityRegistry, null), this._Testability_12);
        return this._AppModule_7;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import7.AppRoutingModule)) {
            return this._AppRoutingModule_6;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_7;
        }
        if ((token === import39.LOCALE_ID)) {
            return this._LOCALE_ID_8;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_9;
        }
        if ((token === import40.ErrorHandler)) {
            return this._ErrorHandler_10;
        }
        if ((token === import9.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_11;
        }
        if ((token === import10.Testability)) {
            return this._Testability_12;
        }
        if ((token === import11.ApplicationRef_)) {
            return this._ApplicationRef__13;
        }
        if ((token === import11.ApplicationRef)) {
            return this._ApplicationRef_14;
        }
        if ((token === import12.Compiler)) {
            return this._Compiler_15;
        }
        if ((token === import30.APP_ID)) {
            return this._APP_ID_16;
        }
        if ((token === import41.DOCUMENT)) {
            return this._DOCUMENT_17;
        }
        if ((token === import13.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_18;
        }
        if ((token === import14.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_19;
        }
        if ((token === import14.EventManager)) {
            return this._EventManager_20;
        }
        if ((token === import15.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_21;
        }
        if ((token === import42.AnimationDriver)) {
            return this._AnimationDriver_22;
        }
        if ((token === import16.DomRootRenderer)) {
            return this._DomRootRenderer_23;
        }
        if ((token === import43.RootRenderer)) {
            return this._RootRenderer_24;
        }
        if ((token === import17.DomSanitizer)) {
            return this._DomSanitizer_25;
        }
        if ((token === import44.Sanitizer)) {
            return this._Sanitizer_26;
        }
        if ((token === import18.ViewUtils)) {
            return this._ViewUtils_27;
        }
        if ((token === import45.IterableDiffers)) {
            return this._IterableDiffers_28;
        }
        if ((token === import46.KeyValueDiffers)) {
            return this._KeyValueDiffers_29;
        }
        if ((token === import15.SharedStylesHost)) {
            return this._SharedStylesHost_30;
        }
        if ((token === import19.Title)) {
            return this._Title_31;
        }
        if ((token === import20.BrowserXhr)) {
            return this._BrowserXhr_32;
        }
        if ((token === import21.ResponseOptions)) {
            return this._ResponseOptions_33;
        }
        if ((token === import47.XSRFStrategy)) {
            return this._XSRFStrategy_34;
        }
        if ((token === import22.XHRBackend)) {
            return this._XHRBackend_35;
        }
        if ((token === import23.RequestOptions)) {
            return this._RequestOptions_36;
        }
        if ((token === import48.Http)) {
            return this._Http_37;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_38;
        }
        if ((token === import36.LocationStrategy)) {
            return this._LocationStrategy_39;
        }
        if ((token === import24.Location)) {
            return this._Location_40;
        }
        if ((token === import25.UrlSerializer)) {
            return this._UrlSerializer_41;
        }
        if ((token === import26.RouterOutletMap)) {
            return this._RouterOutletMap_42;
        }
        if ((token === import49.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_43;
        }
        if ((token === import50.ROUTES)) {
            return this._ROUTES_44;
        }
        if ((token === import37.Router)) {
            return this._Router_45;
        }
        if ((token === import51.ActivatedRoute)) {
            return this._ActivatedRoute_46;
        }
        if ((token === import30.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_47;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__13.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map