import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';
import { MES_ROUTES } from '../constants/routes.constant';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  IMAGES = IMAGES;
  MES_ROUTES = MES_ROUTES;
  
  constructor() { }

  ngOnInit() {
  }

  openDialer(){
    window.open('tel:' + '(+20) 155 000 6665', '_system');
  }
  externalNavigation(url) {
    window.open(
      url, '_blank'
    );
  }
}
