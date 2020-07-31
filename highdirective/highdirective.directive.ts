import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[betterhigh]'
})
export class betterhighdirective implements OnInit{

    @HostBinding('style.background-color') bclo: String = "transparent";

    // constructor(private elementref: ElementRef ,private rend: Renderer2){
    // }

    // ngOnInit(){
    //     this.rend.setStyle(this.elementref.nativeElement , 'background-color' , 'blue');
    // }

    @HostListener('mouseenter') mouseoverme(eventdata: Event){
        this.bclo = 'red';
    }

    @HostListener('mouseleave') mouseleaveme(eventdata: Event){
        this.bclo = 'blue';
    }
}