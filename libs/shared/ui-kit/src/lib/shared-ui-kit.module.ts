import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InputComponent } from "./input/input.component";
import { CardComponent } from "./card/card.component";
import { ButtonComponent } from "./button/button.component";
import { IconComponent } from "./icon/icon.component";
import { RippleDirective } from "./ripple/ripple.directive";

import { DEFAULT_CONFIG, RIPPLE_CONFIG_TOKEN } from "./ripple/ripple-config";

const EXPORTED_DECLARATIONS = [
  InputComponent,
  CardComponent,
  ButtonComponent,
  IconComponent,
  RippleDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  providers: [{ provide: RIPPLE_CONFIG_TOKEN, useValue: DEFAULT_CONFIG }],
})
export class SharedUiKitModule {}
