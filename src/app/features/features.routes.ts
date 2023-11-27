import { Routes } from '@angular/router';

export const FEATURES_ROUTES: Routes = [
  // {
  //   path: 'bi-report',
  //   loadComponent: () =>
  //     import('./bi-reports/bi-reports.routes').then((m) => m.BI_REPORTS_ROUTES),
  // },
  {
    path: 'request',
    loadChildren: () =>
      import('./request/request.routes').then((m) => m.REQUEST_ROUTES),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./team/team.component').then((m) => m.TeamComponent),
  },
];
