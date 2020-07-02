import { Component, OnInit} from '@angular/core';
import { IMAGES } from '../constants/images';
import { Router } from '@angular/router';
import { MES_ROUTES } from '../constants/routes.constant';

@Component({
  selector: 'mes-header',
  templateUrl: './mes-header.component.html',
  styleUrls: ['./mes-header.component.scss']
})
export class MesHeaderComponent implements OnInit {

  IMAGES = IMAGES;
  MES_ROUTES = MES_ROUTES;
  overAdvisoryGreyFlag = false;
  overSystemsGreyFlag = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  getActiveLink(url) {

    return this.router.url.includes(url);
  }

  navigate(url) {
    url? window.location.href = url : '';
  }

  overAdvisoryGrey(action) {
    this.overAdvisoryGreyFlag = action;
  }
  overSystemsGrey(action) {
    this.overSystemsGreyFlag = action;
  }

}