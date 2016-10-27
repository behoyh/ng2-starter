import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app.module';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

 const PLATFORM = platformBrowserDynamic();

// JIT
// PLATFORM.bootstrapModule(AppModule);

// AOT
PLATFORM.bootstrapModuleFactory(AppModuleNgFactory);