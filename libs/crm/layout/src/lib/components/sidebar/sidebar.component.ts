import { ChangeDetectionStrategy, HostBinding, Component } from '@angular/core';

@Component({
  selector: 'akva-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @HostBinding('class.akva-sidebar') true;
}
