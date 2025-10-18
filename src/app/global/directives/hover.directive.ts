import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverDirective {

  constructor(private readonly elementRef: ElementRef) { 

  }

  @HostListener('mouseenter')
  scaleElement(){
    this.elementRef.nativeElement.style.transform = 'scale(1.05)';
  }

  @HostListener('mouseleave')
  unscaleElement(){
    this.elementRef.nativeElement.style.transform = 'scale(1)';
  }
}
