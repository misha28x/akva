import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from '@akva/crm/layout';

export const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () => import('@akva/crm/auth').then((m) => m.CrmAuthModule),
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'tasks-planning',
        loadChildren: () =>
          import('@akva/crm/task-planning').then(
            (m) => m.CrmTaskPlanningModule
          ),
      },
      {
        path: 'lab-requests',
        loadChildren: () =>
          import('@akva/crm/task-planning').then(
            (m) => m.CrmTaskPlanningModule
          ),
      },
    ],
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
