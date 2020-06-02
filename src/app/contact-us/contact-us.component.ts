import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  IMAGES = IMAGES;

  constructor() { }

  ngOnInit() {
  }

  openDialer(){
    window.open('tel:' + '(+20) 155 000 6665', '_system');
  }
}
