import { Component, Input, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';
import { MES_ROUTES } from 'src/app/constants/routes.constant';

// export enum BORDER_LINE_COLOR {
//     CYAN = 'cyan',
//     ORANGE = 'orange'
// }

@Component({
    selector: 'home-img-more-nav',
    templateUrl: './home-img-more-nav.component.html',
    styleUrls: ['./home-img-more-nav.component.scss'],
})

export class HomeImgMoreNavComponent implements OnInit {

    @Input() imgPath: any;

    @Input() textTitle: any;

    @Input() textBody: any;

    IMAGES = IMAGES;

    MES_ROUTES = MES_ROUTES;

    ngOnInit() {
    }

    navigate(url) {
        url? window.location.href = url : '';
    }

}