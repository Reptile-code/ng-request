import { Routes } from '@angular/router';

export const REQUEST_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/requests/request.component').then(
        (m) => m.RequestComponent
      ),
    // children: [
    //   {
    //     path: 'Request',
    //     loadChildren: () =>
    //       import('./request.component').then((m) => m.RequestComponent),
    //   },
    // ],
  },
];
