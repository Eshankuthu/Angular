import {Directive, ElementRef} from '@angular/core';


@Directive({selector:'[myHighlight]' })
export class HighLightDirective{

        constructor(e1: ElementRef){
            e1.nativeElement.style.backgroundColor='yellow';
        }
}