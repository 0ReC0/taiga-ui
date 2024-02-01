```ts
// ...
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TuiPushModule} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter([
      {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => import('./home/home.component'),
      },
    ]),
    importProvidersFrom(
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiPushModule,
      // ...
    ),
  ],
}).catch(err => console.error(err));
```
