import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appAutofocus]' })
export class AutofocusDirective implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.elementRef.nativeElement.focus(), 120);
  }
}
