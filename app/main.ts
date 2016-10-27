import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const PLATFORM = platformBrowserDynamic();

// JIT
import { AppModule } from './app.module';
PLATFORM.bootstrapModule(AppModule);

// AOT
//import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
// PLATFORM.bootstrapModuleFactory(AppModuleNgFactory);