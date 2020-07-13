import { Component } from '@angular/core';
import { IMAGES } from '../constants/images';
import { Router } from '@angular/router';
import { MES_ROUTES } from '../constants/routes.constant';

@Component({
  selector: 'mes-header',
  templateUrl: './mes-header.component.html',
  styleUrls: ['./mes-header.component.scss']
})
export class MesHeaderComponent {

  IMAGES = IMAGES;
  MES_ROUTES = MES_ROUTES;
  overAdvisoryGreyFlag = false;
  overSystemsGreyFlag = false;

  constructor(private router: Router) { }

  getActiveLink(url) {

    return this.router.url.includes(url.replace('#',''));
  }

  navigate(url) {
    url? window.location.href = url : '';
    let element = document.getElementById('navbarNavDropdown');
    element.classList.remove('show');
  }

  overAdvisoryGrey(action) {
    this.overAdvisoryGreyFlag = action;
  }
  overSystemsGrey(action) {
    this.overSystemsGreyFlag = action;
  }

}