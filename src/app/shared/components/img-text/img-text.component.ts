import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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

export class ImgTextComponent implements OnInit {

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
        // this.showAfterLoad = true;
        setTimeout(() => {
            if (window.innerWidth > 991) {
                this.height = this.targetElement.nativeElement.offsetHeight - 100;
                console.log(1, this.height)
                // this.targetElement.nativeElement.offsetHeight = this.height - 400;
                this.heightStyle = { "height": this.height + "px" };
            }
        }, 500);
    }
    // ngAfterViewInit() {
    //     const height = this.targetElement.nativeElement.offsetHeight;
    //         console.log(height)
    // }

}