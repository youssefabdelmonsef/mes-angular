import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

@Component({
  selector: 'board-members',
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.scss']

})

export class BoardMembersComponent implements OnInit {

  IMAGES = IMAGES;
  
  constructor() {}

  ngOnInit() {
  }

}