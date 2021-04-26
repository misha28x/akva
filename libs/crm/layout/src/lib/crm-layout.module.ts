import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';
import { ContentComponent } from './components/content.component';
import { MainViewComponent } from './main-view/main-view.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MainViewComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  exports: [MainViewComponent],
})
export class CrmLayoutModule {}
