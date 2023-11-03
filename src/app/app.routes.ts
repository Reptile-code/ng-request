import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // loadChildren: () =>
    //   import('./features/request/request.routes').then((m) => m.REQUEST_ROUTES),
    children: [
      {
        path: 'Overview',
        loadComponent: () =>
          import('./features/overview/overview.component').then(
            (m) => m.OverviewComponent
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/request/request.routes').then(
            (m) => m.REQUEST_ROUTES
          ),
      },
    ],
  },
];
