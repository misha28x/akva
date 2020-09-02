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

import { LoginPageComponent } from './containers/login-page.component';
import { LoginFormComponent } from './components/login-form.component';

import { CrmAuthRoutingModule } from './crm-auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import * as fromAuth from './state/reducers';

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
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginPageComponent, LoginFormComponent],
  exports: [LoginPageComponent],
})
export class CrmAuthModule {}
