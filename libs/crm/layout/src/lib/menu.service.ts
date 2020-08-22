import { Injectable } from '@angular/core';

import { adminMenu } from '@akva/crm/consts';
import { MenuLink } from '@akva/shared/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenu(): MenuLink[] {
    return adminMenu;
  }
}
