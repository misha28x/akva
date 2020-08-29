import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrmAuthModule } from '@akva/crm/auth';
import { CrmLayoutModule } from '@akva/crm/layout';
import { API_PROVIDER } from '@akva/shared/config';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
registerLocaleData(uk);

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CrmAuthModule,
    BrowserAnimationsModule,
    CrmLayoutModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }, API_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
