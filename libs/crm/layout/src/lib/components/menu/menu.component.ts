import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MenuLink } from '@akva/shared/menu';

@Component({
  selector: 'akva-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @HostBinding('class.akva-menu') true;

  @Input() menu: MenuLink[];
}
