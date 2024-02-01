```ts
// ...
import {TuiRootModule} from '@taiga-ui/core';

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
      // ...
    ),
  ],
}).catch(err => console.error(err));
```
