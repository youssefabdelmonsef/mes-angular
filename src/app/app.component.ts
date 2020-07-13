import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMAGES } from './constants/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mes';
  imgs = new Array();
  IMAGES = IMAGES;
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.pload(
      IMAGES.HOME_PAGE.TWO,
      IMAGES.HOME_PAGE.ONE,
      IMAGES.HOME_PAGE.THREE,
      IMAGES.HOME_PAGE.FOUR,
      IMAGES.HOME_PAGE.FIVE,
      IMAGES.HOME_PAGE.SIX,
      IMAGES.HOME_PAGE.SEVEN,
      IMAGES.HOME_PAGE.EIGHT,
      IMAGES.HOME_PAGE.NINE,
      IMAGES.CLIENTS.LOGOS.L01,
      IMAGES.CLIENTS.LOGOS.L03,
      IMAGES.CLIENTS.LOGOS.L05,
      IMAGES.CLIENTS.LOGOS.L07,
      IMAGES.CLIENTS.LOGOS.L09,
      IMAGES.CLIENTS.LOGOS.L11,
      IMAGES.CLIENTS.LOGOS.L13,
      IMAGES.CLIENTS.LOGOS.L15,
      IMAGES.CLIENTS.LOGOS.L17,
      IMAGES.CLIENTS.LOGOS.L19,
      IMAGES.CLIENTS.LOGOS.L21,
      IMAGES.CLIENTS.LOGOS.L23,
      IMAGES.CLIENTS.LOGOS.L25,
      IMAGES.ABOUT_US.WHO_WE_ARE.ONE,
      IMAGES.ABOUT_US.WHO_WE_ARE.TWO,
      IMAGES.ABOUT_US.WHO_WE_ARE.THREE,
      IMAGES.ABOUT_US.WHO_WE_ARE.FOUR,
      IMAGES.ABOUT_US.WHO_WE_ARE.FIVE,
      IMAGES.ABOUT_US.WHO_WE_ARE.SIX,
      IMAGES.ABOUT_US.WHO_WE_ARE.SEVEN,
      IMAGES.ABOUT_US.WHO_WE_ARE.EIGHT,
      IMAGES.ABOUT_US.BOARD_MEMBERS.ONE,
      IMAGES.ABOUT_US.BOARD_MEMBERS.TWO,
      IMAGES.ABOUT_US.BOARD_MEMBERS.THREE,
      IMAGES.ABOUT_US.BOARD_MEMBERS.FOUR,
      IMAGES.NEWS.ONE,
      IMAGES.NEWS.TWO,
      IMAGES.NEWS.THREE,
      IMAGES.NEWS.FOUR,
      IMAGES.SYSTEMS.TWO,
      IMAGES.SYSTEMS.THREE,
      IMAGES.SYSTEMS.FOUR,
      IMAGES.SYSTEMS.FIVE,
      IMAGES.SYSTEMS.SIX,
      IMAGES.SYSTEMS.SEVEN,
      IMAGES.SYSTEMS.EIGHT,
      IMAGES.SYSTEMS.NINE,
      IMAGES.SYSTEMS.TEN,
      IMAGES.SYSTEMS.ELEVEN,
      IMAGES.SYSTEMS.TWELVE,
      IMAGES.SYSTEMS.THIRTEEN,
      IMAGES.SYSTEMS.FOURTEEN,
      IMAGES.SYSTEMS.FIFTEEN,
      IMAGES.SYSTEMS.ONE,
      IMAGES.SERVICES.TWO,
      IMAGES.SERVICES.THREE,
      IMAGES.SERVICES.FOUR,
      IMAGES.SERVICES.FIVE,
      IMAGES.SERVICES.SIX,
      IMAGES.SERVICES.SEVEN,
      IMAGES.SERVICES.ONE,
      IMAGES.CLIENTS.ONE,
      IMAGES.CONTACT_US.ONE
      );
  }

  pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
    }
  }
}