import { ElementRef, NgZone } from "@angular/core";
import { RippleRef } from "./ripple-ref";
import { RippleConfig } from "./ripple-config";

const supportedEvents = ["mousedown", "mouseup", "click"];

export class RippleRenderer implements EventListenerObject {
  private containerEl: HTMLElement;

  constructor(
    private container: HTMLElement | ElementRef,
    private ngZone: NgZone,
    private config: RippleConfig
  ) {
    this.containerEl = coerceElement(container);
    this.containerEl.style.overflow = "hidden";
  }

  fadeInRipple(x: number, y: number) {
    const clientRect = this.containerEl.getBoundingClientRect();
    const animationConfig = this.config.animation;

    if (this.config.centered) {
      x = clientRect.left + clientRect.width / 2;
      y = clientRect.top + clientRect.height / 2;
    }

    const radius = distanceToFurthestCorner(x, y, clientRect);

    const offsetY = y - clientRect.top;
    const offsetX = x - clientRect.left;

    const ripple = document.createElement("div");

    ripple.classList.add("akva-ripple");
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;

    const enterDuration = animationConfig.enterDuration;
    ripple.style.transitionDuration = `${enterDuration}ms`;

    this.containerEl.appendChild(ripple);
    enforceStyleRecalculation(ripple);

    ripple.style.transform = "scale(1)";

    const rippleRef = new RippleRef(this, ripple);

    this.runTimeoutOutsideOfAngular(() => rippleRef.fadeOut(), enterDuration);
  }

  fadeOutRipple(rippleRef: RippleRef) {
    const element = rippleRef.element;
    const { exitDuration } = this.config.animation;

    element.style.transitionDuration = `0, ${exitDuration}ms`;
    element.style.opacity = "0";

    this.runTimeoutOutsideOfAngular(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }, exitDuration);
  }

  setupSupportedEvents() {
    if (!this.containerEl) return;

    this.unRegisterEvents();
    this.registerEvents();
  }

  handleEvent(evt: MouseEvent) {
    if (evt.type === "mousedown") {
      this.fadeInRipple(evt.x, evt.y);
    }
  }

  unRegisterEvents() {
    this.runTimeoutOutsideOfAngular(() =>
      supportedEvents.forEach((eventType) =>
        this.containerEl.removeEventListener(eventType, this)
      )
    );
  }

  private registerEvents() {
    this.runTimeoutOutsideOfAngular(() =>
      supportedEvents.forEach((eventType) => {
        this.containerEl.addEventListener(eventType, this);
      })
    );
  }

  private runTimeoutOutsideOfAngular(fn: () => unknown, delay: number = 0) {
    this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
}

function enforceStyleRecalculation(element: HTMLElement) {
  window.getComputedStyle(element).getPropertyValue("opacity");
}

function coerceElement(el: HTMLElement | ElementRef): HTMLElement {
  return el instanceof HTMLElement ? el : el.nativeElement;
}

function distanceToFurthestCorner(x: number, y: number, rect: ClientRect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
