import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmAuthRoutingModule } from './crm-auth-routing.module';

import { NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';

import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    CrmAuthRoutingModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class CrmAuthModule {}
