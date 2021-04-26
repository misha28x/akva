import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrmLayoutModule } from '@akva/crm/layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CrmLayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
