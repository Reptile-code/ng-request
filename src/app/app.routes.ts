import { Routes } from '@angular/router';
import { OverviewComponent } from './features/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/request/request.component').then(
        (m) => m.RequestComponent
      ),
    children: [
      {
        path: 'Overview',
        loadComponent: () =>
          import('./features/overview/overview.component').then(
            (m) => m.OverviewComponent
          ),
      },
      {
        path: 'Request',
        loadChildren: () =>
          import('./features/request/request.routes').then(
            (m) => m.REQUEST_ROUTES
          ),
      },
    ],
  },
];
