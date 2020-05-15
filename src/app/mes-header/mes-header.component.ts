import { Component, OnInit} from '@angular/core';
import { IMAGES } from '../constants/images';
import { Router } from '@angular/router';
import { MES_ROUTES } from '../constants/routes.constat';

@Component({
  selector: 'mes-header',
  templateUrl: './mes-header.component.html',
  styleUrls: ['./mes-header.component.scss']
})
export class MesHeaderComponent implements OnInit {

  IMAGES = IMAGES;
  MES_ROUTES = MES_ROUTES;
  
  constructor(private router: Router) { }

  ngOnInit() {

  }

  getActiveLink(url) {
    // url.consistOf()
    console.log(url);
    console.log(this.router.url.includes(url));

    return this.router.url.includes(url);
    // console.log(this.router.url);
  }

  navigate(url) {
    console.log(url)
    url? this.router.navigate([url]) : '';
  }

}