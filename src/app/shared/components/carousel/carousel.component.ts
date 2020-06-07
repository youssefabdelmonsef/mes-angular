import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

export enum BORDER_LINE_COLOR {
    CYAN = 'cyan',
    ORANGE = 'orange'
}

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent implements OnInit {


    IMAGES = IMAGES;

    ngOnInit() {
    }


    slides = [
        { img: IMAGES.CLIENTS.LOGOS.L01 },
        { img: IMAGES.CLIENTS.LOGOS.L02 },
        { img: IMAGES.CLIENTS.LOGOS.L03 },
        { img: IMAGES.CLIENTS.LOGOS.L04 },
        { img: IMAGES.CLIENTS.LOGOS.L05 },
        { img: IMAGES.CLIENTS.LOGOS.L06 },
        { img: IMAGES.CLIENTS.LOGOS.L07 },
        { img: IMAGES.CLIENTS.LOGOS.L08 },
        { img: IMAGES.CLIENTS.LOGOS.L09 },
        { img: IMAGES.CLIENTS.LOGOS.L10 },
        { img: IMAGES.CLIENTS.LOGOS.L11 },
        { img: IMAGES.CLIENTS.LOGOS.L12 },
        { img: IMAGES.CLIENTS.LOGOS.L13 },
        { img: IMAGES.CLIENTS.LOGOS.L14 },
        { img: IMAGES.CLIENTS.LOGOS.L15 },
        { img: IMAGES.CLIENTS.LOGOS.L16 },
        { img: IMAGES.CLIENTS.LOGOS.L17 },
        { img: IMAGES.CLIENTS.LOGOS.L18 },
        { img: IMAGES.CLIENTS.LOGOS.L19 },
        { img: IMAGES.CLIENTS.LOGOS.L20 },
        { img: IMAGES.CLIENTS.LOGOS.L21 },
        { img: IMAGES.CLIENTS.LOGOS.L22 },
        { img: IMAGES.CLIENTS.LOGOS.L23 },
        { img: IMAGES.CLIENTS.LOGOS.L24 },
        { img: IMAGES.CLIENTS.LOGOS.L25 },
        { img: IMAGES.CLIENTS.LOGOS.L26 },
        { img: IMAGES.CLIENTS.LOGOS.L27 },
        { img: IMAGES.CLIENTS.LOGOS.L28 }
    ];
    slideConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        adaptiveHeight: true,
        swipeToSlide: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    arrows: true
                }
            },
        ],
        prevArrow: "<span class='left-arrow cursor-pointer'> < </span>",
        nextArrow: "<span class='right-arrow cursor-pointer'> > </span>"
    };

    addSlide() {
        this.slides.push({ img: "http://placehold.it/350x150/777777" })
    }

    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }

    slickInit(e) {
        console.log('slick initialized');
    }

    breakpoint(e) {
        console.log('breakpoint');
    }

    afterChange(e) {
        console.log('afterChange');
    }

    beforeChange(e) {
        console.log('beforeChange');
    }
}