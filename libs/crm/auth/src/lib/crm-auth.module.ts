import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzInputModule,
} from 'ng-zorro-antd';

import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY, authReducer } from './state/auth.reducer';

import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CrmAuthRoutingModule } from './crm-auth-routing.module';
import { AuthFacadeService } from './state/auth-facade.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    CrmAuthRoutingModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
  ],
  declarations: [LoginPageComponent, LoginFormComponent],
  exports: [LoginPageComponent],
  providers: [AuthFacadeService],
})
export class CrmAuthModule {}
