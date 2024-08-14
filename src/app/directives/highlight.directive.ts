import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: string = '';
  @Input() appScale: string = '1';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
    this.scaleElement(this.appScale || '1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.scaleElement('1');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  private scaleElement(scale: string) {
    this.el.nativeElement.style.transform = `scale(${scale})`;
    this.el.nativeElement.style.transition = 'transform .18s';
  }
}
