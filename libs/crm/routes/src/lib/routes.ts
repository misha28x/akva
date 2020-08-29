import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () => import('@akva/crm/auth').then((m) => m.CrmAuthModule),
  },
  {
    path: 'admin',
    children: [],
  },
  {
    path: 'manager',
    children: [],
  },
  {
    path: 'metrology',
    children: [],
  },
];
