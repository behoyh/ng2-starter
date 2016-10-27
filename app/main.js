import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
var PLATFORM = platformBrowserDynamic();
// JIT
// PLATFORM.bootstrapModule(AppModule);
// AOT
PLATFORM.bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map