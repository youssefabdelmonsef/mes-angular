import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

@Component({
  selector: 'who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']

})

export class WhoWeAreComponent implements OnInit {

  IMAGES = IMAGES;
  constructor() {}

  ngOnInit() {
  }

}