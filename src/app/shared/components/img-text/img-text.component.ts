import { Component, Input, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

export enum BORDER_LINE_COLOR {
    CYAN = 'cyan',
    ORANGE = 'orange'
}

@Component({
    selector: 'img-text',
    templateUrl: './img-text.component.html',
    styleUrls: ['./img-text.component.scss'],
})

export class ImgTextComponent implements OnInit {

    @Input() imgPath: any;

    @Input() textParagraph: any;

    @Input() upperLineColor: any;

    @Input() imgTextAlignmentReversed: boolean = false;

    @Input() borderLineColor: string = BORDER_LINE_COLOR.CYAN; // default color is cyan
    
    @Input() arabicText: boolean = false;

    IMAGES = IMAGES;

    ngOnInit() {
        
    }
}