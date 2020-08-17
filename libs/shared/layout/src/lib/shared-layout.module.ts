import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, SidebarComponent, ContentComponent],
})
export class SharedLayoutModule {}
