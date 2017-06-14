import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NewTaskModule } from './newTask/newTask.module';

const platform = platformBrowserDynamic();
platformBrowserDynamic().bootstrapModule(NewTaskModule);


