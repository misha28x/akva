import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'akva-sidebar',
  template: `
    <div class="bg-primary-700 h-full">
      <div
        class="flex items-center justify-between p-4 h-[var(--header-height)]] shadow-md"
      >
        <img
          class="h-[var(--logo-height)]"
          src="./assets/logo-white.png"
          alt="Логотип Аквастандарт"
        />
      </div>
      <div class="p-4 h-auto"><ng-content></ng-content></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
