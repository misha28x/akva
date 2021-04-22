import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@akva/crm/environments';
import { API_PROVIDER } from '@akva/crm/config';

import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
registerLocaleData(uk);

@NgModule({
  imports: [
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [API_PROVIDER],
})
export class CoreModule {}
