import { NgModule } from '@angular/core';

import { INITIAL_PATH_PROVIDER } from '@akva/shared/config';
import { environment } from '@akva/shared/environments';
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
    API_PROVIDER,
    INITIAL_PATH_PROVIDER,
  ],
})
export class CoreModule {}
