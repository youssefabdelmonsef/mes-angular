import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';
import { MES_ROUTES } from '../constants/routes.constant';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  IMAGES = IMAGES;
  MES_ROUTES = MES_ROUTES;
  contactUsForm = {
    name: '',
    email: '',
    number: '',
    message: ''
  };
  emailSent = false;
  emailFailed = false;
  emailspinner = false;

  constructor() { }

  ngOnInit() {
  }

  openDialer() {
    window.open('tel:' + '(+20) 155 000 6665', '_system');
  }
  externalNavigation(url) {
    window.open(
      url, '_blank'
    );
  }

  sendEmail() {
    if (this.contactUsForm.name && this.contactUsForm.email
      && this.contactUsForm.number && this.contactUsForm.message) {
        this.emailSent = false;
        this.emailFailed = false;
        this.emailspinner = true;
      emailjs.send('mes_dev_channel', 'contact_us', this.contactUsForm, 'user_J0XRbMNZL5YIzG3nhGgUv')
        .then((result: EmailJSResponseStatus) => {
          this.emailSent = true;
          this.emailspinner = false;
        }, (error) => {
          this.emailFailed = true;
          this.emailspinner = false;
        });
    }
    else {
      alert('Please fill all data.')
    }
  }

}
