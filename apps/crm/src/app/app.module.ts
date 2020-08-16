import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrmLayoutModule } from '@akva/crm/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CrmLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
