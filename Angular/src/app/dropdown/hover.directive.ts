import {Directive , ElementRef , Renderer2 , OnInit , HostListener} from '@angular/core';

@Directive({
    selector: '[app-hover]'
})

export class HoverDirective implements OnInit{

    constructor(private elRef:ElementRef , private renderer2: Renderer2){

    }

    ngOnInit(){

    }

    @HostListener("mouseenter") enter(){
        this.renderer2.setStyle(this.elRef.nativeElement,'background-color' , "lightgrey");
    }
    @HostListener("mouseleave") leave(){
        this.renderer2.setStyle(this.elRef.nativeElement,'background-color' , "white");
    }
}