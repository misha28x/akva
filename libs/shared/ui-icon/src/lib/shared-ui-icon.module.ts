import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd';

import { IconComponent } from './icon/icon.component';


@NgModule({
  imports: [CommonModule, NzIconModule.forChild([])],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class SharedUiIconModule {}
