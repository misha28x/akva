import {
  ChangeDetectionStrategy,
  HostBinding,
  Component,
  Input,
} from "@angular/core";

import { Size } from "../types/size";
import { ColorPalette } from "../types/color";

const DEFAULT_COLOR: ColorPalette = "primary";

@Component({
  selector: "button[akva-button]",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() disabled = false;
  @Input() size: Size = "lg";
  @Input() color: ColorPalette = DEFAULT_COLOR;

  @HostBinding("class")
  get themeClass() {
    return this.buildThemeClass();
  }

  @HostBinding("disabled")
  get isDisabled() {
    return this.disabled || this.loading;
  }

  @HostBinding("attr.loading")
  get isLoading() {
    return this.loading;
  }

  private buildThemeClass() {
    return `akva-${this.color} btn-${this.size}`;
  }
}
