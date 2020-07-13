import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { IMAGES } from '../constants/images';
import { MES_ROUTES } from '../constants/routes.constant';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild('chatTeaser') chatTeaser: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (this.chatTeaser && this.chatTeaser.nativeElement.offsetTop >= scrollPosition) {
    }
  }

  MES_ROUTES = MES_ROUTES;

  IMAGES = IMAGES;

  textParaghraphImgTwo = `<strong style="font-family: sans-serif; font-weight: bold;">Middle East Security</strong> was established in 2009, developed by an
  elite group of policemen and military officers, security
  specialists, highly experienced lawyers and well-trained
  administrators who use state-of- the-art leadership
  techniques.<br>
  Our focal points are on Travel, Proximity Protection, Corporate
  Events, Corporate Investigations, Product Protection, Due
  Diligence, and Training, throughout our global network of
  consultants.<br>
  Middle East Security advisors and operators support in
  enabling and identifying risks on behalf of their multinational
  clients and partners across the Middle East and regions of
  Africa.<br>
  Middle East Security assists in the mitigation of these risks
  with sound advice and local knowledge, while applying
  protective practices against a variety of possible threats.
  Since 2011, Middle East Security has evolved from a security
  corporation to a total enterprise risk management corporation.`;

  textTitleThree = 'ASSET PROTECTION';
  textBodyThree = 'Middle East Security ensures protection services for high risk valuable assets.';

  textTitleFour = 'EVENT SECURITY';
  textBodyFour = 'Middle East Security has significant experience providing Security Advisors to safeguard our clients Special Events.';

  textTitleFive = 'EXECUTIVE PROTECTION';
  textBodyFive = 'Middle East Security provides close protection operatives and teams to cover businesses and private individuals.';

  textTitleSix = 'MANNED SECURITY GUARDING';
  textBodySix = 'Middle East Security provides security services deploying respectable, well trained, vetted and discreet security officers.';

  textTitleSeven = 'MEET & GREET';
  textBodySeven = 'Middle East Security Meet & Greet service provides a quick transition through all airport arrival and departure formalities.';

  textTitleEight = 'SECURE TRANSPORTATION';
  textBodyEight = 'Middle East Security offers tailored solutions based upon the client\'s itineraries and travel plans, while assessing the risk setting of destinations.';

  constructor() { }

  ngOnInit() {
  }

  externalNavigation(url) {
    window.open(
      url, '_blank'
    );
  }

}
