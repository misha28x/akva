import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';
import { ContentComponent } from './components/content.component';
import { MainViewComponent } from './main-view/main-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MainViewComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
  exports: [MainViewComponent],
})
export class CrmLayoutModule {}
