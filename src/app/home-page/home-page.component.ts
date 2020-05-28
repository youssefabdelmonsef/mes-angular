import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  IMAGES = IMAGES;

  textParaghraphImgTwo = `<strong style="font-family: sans-serif; font-weight: bold;">Middle East Security</strong> was established in 2009, developed by an
  elite group of policemen and military ofcers, security
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

  constructor() { }

  ngOnInit() {
  }

}
