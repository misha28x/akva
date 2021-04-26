import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'akva-header',
  template: `
    <div class="flex justify-between bg-white shadow-sm h-full">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
