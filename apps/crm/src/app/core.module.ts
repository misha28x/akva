import { NgModule } from '@angular/core';

import { environment } from '@akva/crm/environments';
import { API_PROVIDER } from '@akva/shared/config';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
registerLocaleData(uk);

@NgModule({
  imports: [],
  providers: [
    API_PROVIDER
  ],
})
export class CoreModule {}
