import { Component, Input, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';
import { trigger, style, transition, animate } from '@angular/animations';

export enum BORDER_LINE_COLOR {
    CYAN = 'cyan',
    ORANGE = 'orange'
}

@Component({
    selector: 'img-text',
    templateUrl: './img-text.component.html',
    styleUrls: ['./img-text.component.scss']
})

export class ImgTextComponent implements OnInit, AfterViewInit {

    @ViewChild('targetImage') targetImage: ElementRef;
    @ViewChild('targetTextArea') targetElement: ElementRef;

    @Input() imgPath: any;

    @Input() textParagraph: any;

    @Input() upperLineColor: any;

    @Input() imgTextAlignmentReversed: boolean = false;

    @Input() borderLineColor: string = BORDER_LINE_COLOR.CYAN; // default color is cyan

    @Input() arabicText: boolean = false;

    height;
    heightStyle;

    IMAGES = IMAGES;
    id = false;
    showAfterLoad = false;

    ngOnInit() {
        this.showAfterLoad = true;
        setTimeout(() => {
                if (window.innerWidth > 991) {
                    this.height = this.targetImage.nativeElement.offsetHeight +
                        this.targetElement.nativeElement.offsetHeight - 125;
                    console.log(this.targetImage.nativeElement.offsetHeight,
                        this.targetElement.nativeElement.offsetHeight, 
                        this.height)
                    this.heightStyle = { "height": this.height + "px" };
                }
        }, 1500);    
    }

    ngAfterViewInit() {
    }


}