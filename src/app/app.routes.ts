import { Routes } from '@angular/router';

export const routes: Routes = [
  // loadChildren: () =>
  //   import('./features/request/request.routes').then((m) => m.REQUEST_ROUTES),
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    loadChildren: () => import('./home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./features/features.component').then((m) => m.FeaturesComponent),
    loadChildren: () =>
      import('./features/features.routes').then((m) => m.FEATURES_ROUTES),
  },
];
