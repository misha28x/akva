import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrmLayoutModule } from '@akva/crm/layout';

import { TaskPlanningComponent } from './task-planning/task-planning.component';

@NgModule({
  imports: [
    CommonModule,
    CrmLayoutModule,
    RouterModule.forChild([{ path: '', component: TaskPlanningComponent }]),
  ],
  declarations: [TaskPlanningComponent],
})
export class CrmTaskPlanningModule {}
