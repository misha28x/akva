import { InjectionToken } from "@angular/core";

export interface RippleConfig {
  color: string;
  centered?: boolean;
  animation: RippleAnimationConfig;
}

export interface RippleAnimationConfig {
  enterDuration: number;
  exitDuration: number;
}

export const RIPPLE_CONFIG_TOKEN = new InjectionToken(
  "Ripple and ripple animation token"
);

export const DEFAULT_CONFIG: RippleConfig = {
  color: "#CBD5E1",
  animation: {
    enterDuration: 300,
    exitDuration: 200,
  },
};
