import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiIconModule } from '@akva/shared/ui-icon';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiIconModule],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    DefaultLayoutComponent,
  ],
  exports: [DefaultLayoutComponent],
})
export class CrmLayoutModule {}
