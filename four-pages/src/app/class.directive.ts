import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // 2 vabe e hbe

  // @Input() set bgColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  constructor(private element: ElementRef) {}

  @Input('appClass') set classNames(classObj: any) {
    for (let key of classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
