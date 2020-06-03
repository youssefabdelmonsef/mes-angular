import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  IMAGES = IMAGES;
  
  constructor() { }

  ngOnInit() {
  }

}
