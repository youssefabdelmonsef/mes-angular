import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

enum IMAGES_PROFILE {
  KHALED_AZMY,
  MOHAMED_AZMY,
  GEN_AZMY,
  GEN_ESSAM
}
@Component({
  selector: 'board-members',
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.scss']

})

export class BoardMembersComponent implements OnInit {

  IMAGES = IMAGES;
  IMAGES_PROFILE = IMAGES_PROFILE;
  selectedImage = IMAGES_PROFILE.KHALED_AZMY;
  constructor() {}

  ngOnInit() {
  }

  changeSelectedImage(imageProfile) {
    this.selectedImage = imageProfile;
  }
}