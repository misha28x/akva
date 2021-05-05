import {
  Directive,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
} from "@angular/core";

import { RippleRenderer } from "./ripple-renderer";
import { RIPPLE_CONFIG_TOKEN, RippleConfig } from "./ripple-config";

@Directive({
  selector: "[akvaRipple]",
})
export class RippleDirective implements OnInit, OnDestroy {
  private rippleRenderer: RippleRenderer;

  constructor(
    @Inject(RIPPLE_CONFIG_TOKEN) config: RippleConfig,
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {
    this.rippleRenderer = new RippleRenderer(elementRef, ngZone, config);
  }

  ngOnInit() {
    this.rippleRenderer.setupSupportedEvents();
  }

  ngOnDestroy() {
    this.rippleRenderer.unRegisterEvents();
  }
}
