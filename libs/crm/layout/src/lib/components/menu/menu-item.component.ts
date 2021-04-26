import { Component, Input } from "@angular/core";

import { MenuLink } from "@akva/shared/menu";

@Component({
  selector: "akva-menu-item",
  templateUrl: "./menu-item.component.html",
})
export class MenuItemComponent {
  @Input() menuItem: MenuLink | null = null;
}
