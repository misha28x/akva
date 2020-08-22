import { Component } from '@angular/core';

import { MenuLink } from '@akva/shared/menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'akva-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  readonly menu: MenuLink[];

  constructor(private readonly menuSv: MenuService) {
    this.menu = this.menuSv.getMenu();
  }
}
