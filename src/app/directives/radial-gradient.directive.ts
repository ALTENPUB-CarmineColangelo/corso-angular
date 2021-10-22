import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appRadialGradient]'
})
export class RadialGradientDirective implements OnChanges {
  @Input() appRadialGradient: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'var(--bs-gray-300)'
    this.el.nativeElement.style.backgroundSize = 'auto 110%'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'var(--bs-light)'
    this.el.nativeElement.style.backgroundSize = 'auto 100%'
  }

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this._bgGradient(changes.appRadialGradient.currentValue)
  }

  private _bgGradient(color: string, size: number = -60) {
    this.el.nativeElement.style.backgroundImage = 'radial-gradient('+color+' '+size+'%, transparent 60%)';
  }

}
