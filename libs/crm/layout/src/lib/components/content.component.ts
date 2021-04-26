import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'akva-content',
  template: `
    <div class="p-4 h-full">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
