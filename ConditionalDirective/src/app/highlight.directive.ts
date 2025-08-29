import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private e: ElementRef, private rend: Renderer2) { }

  @Input() set appHighlight(cond: boolean) {
    if (cond) {
      this.rend.addClass(this.e.nativeElement, 'highlightClass');
    }
  }

}
