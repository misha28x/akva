import { text, select, boolean } from "@storybook/addon-knobs";

import { ButtonComponent } from "./button.component";
import { SharedUiKitModule } from "../shared-ui-kit.module";

export default {
  title: "Button Component",
};

export const primary = () => ({
  moduleMetadata: {
    imports: [SharedUiKitModule],
  },
  component: ButtonComponent,
  props: {
    text: text("text", "Primary"),
    color: select(
      "appearance",
      {
        Primary: "primary",
        Secondary: "secondary",
        Error: "error",
        Ghost: "ghost",
      },
      "primary"
    ),

    size: select(
      "Size",
      {
        Small: "sm",
        Medium: "md",
        Large: "lg",
        "Extra Large": "xl",
      },
      "lg"
    ),
    disabled: boolean("Disabled", false),
    loading: boolean("Loading", false),
  },
  template: `<div class='space-x-4'>
  <button akva-button [size]="size" [color]="color" [disabled]="disabled" [loading]="loading">{{ text }}</button>
</div> `,
});
