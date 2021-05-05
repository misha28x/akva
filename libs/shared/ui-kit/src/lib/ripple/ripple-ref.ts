export class RippleRef {
  constructor(
    private rippleRenderer: { fadeOutRipple: (ref: RippleRef) => unknown },
    public element: HTMLElement
  ) {}

  fadeOut() {
    this.rippleRenderer.fadeOutRipple(this);
  }
}
