import { Component, Input } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

@Component({
    selector: 'primary-img',
    templateUrl: './primary-img.component.html',
    styleUrls: ['./primary-img.component.scss'],
})

export class PrimaryImgComponent {

    // IMAGES = IMAGES;

    @Input() imgPath: any;

}