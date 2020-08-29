import { Injectable } from '@angular/core';
import { MenuLink, adminMenu } from '@akva/shared/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenu(): MenuLink[] {
    return adminMenu;
  }
}
