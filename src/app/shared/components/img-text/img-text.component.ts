import { Component, Input } from '@angular/core';

@Component({
    selector: 'img-text',
    templateUrl: './img-text.component.html',
    styleUrls: ['./img-text.component.scss'],
})

export class ImgTextComponent {

    @Input() imgPath: any;

    @Input() text: any;

}