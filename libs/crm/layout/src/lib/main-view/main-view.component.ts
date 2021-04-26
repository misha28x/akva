import { ChangeDetectionStrategy, Component } from '@angular/core';
import { adminMenu, MenuLink } from '@akva/shared/menu';

@Component({
  selector: 'akva-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {
  menu: MenuLink[] = adminMenu;
}
