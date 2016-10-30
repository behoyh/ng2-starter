"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var PLATFORM = platform_browser_dynamic_1.platformBrowserDynamic();
// JIT
var app_module_1 = require('./app.module');
PLATFORM.bootstrapModule(app_module_1.AppModule);
// AOT
// import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
// PLATFORM.bootstrapModuleFactory(AppModuleNgFactory); 
//# sourceMappingURL=main.js.map