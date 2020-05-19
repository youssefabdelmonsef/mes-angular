import { Component } from '@angular/core';
import { IMAGES } from '../constants/images';
import { Router } from '@angular/router';
import { MES_ROUTES } from '../constants/routes.constant';

@Component({
  selector: 'mes-footer',
  templateUrl: './mes-footer.component.html',
  styleUrls: ['./mes-footer.component.scss']
})
export class MesFooterComponent {
  IMAGES = IMAGES;
  MES_ROUTES = MES_ROUTES;
  constructor(private router: Router) {
  }

  externalNavigation(url) {
    window.location.href = url;
  }
}
