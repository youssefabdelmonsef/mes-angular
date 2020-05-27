import { Component, Input, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

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

    IMAGES = IMAGES;

    ngOnInit() {
        // setTimeout(()=>{
        //     console.log(document.getElementById("full-container-height").offsetHeight);
        // },1000)
    }
}