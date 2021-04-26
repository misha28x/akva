import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { MenuLink } from "@akva/shared/menu";

@Component({
  selector: "akva-menu",
  templateUrl: "./menu.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() menu: MenuLink[] = [];
}
