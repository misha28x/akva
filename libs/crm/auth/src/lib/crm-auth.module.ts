import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmAuthRoutingModule } from './crm-auth-routing.module';

import { NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';

import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

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
  declarations: [LoginPageComponent, LoginFormComponent],
  exports: [LoginPageComponent],
})
export class CrmAuthModule {}
