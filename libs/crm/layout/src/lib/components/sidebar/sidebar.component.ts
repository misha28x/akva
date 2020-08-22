import {
  ChangeDetectionStrategy,
  HostBinding,
  Component,
  Input,
} from '@angular/core';

import { MenuLink } from '@akva/shared/menu';
import { adminMenu } from '@akva/crm/consts';

@Component({
  selector: 'akva-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @HostBinding('class.akva-sidebar') true;
}
