import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  IMAGES = IMAGES;
  
  textParaghraphImgTwo = `<h2>ASSET PROTECTION</h2><br>Middle East Security ensures protection services for
  high risked valuable assets.<br><br>
  Whether your assets are static or need transportation,
  we provide detailed survey reports analysis and risk
  assessments to maintain a precise vision of client’s
  investments, utilizing effective security measures while
  providing the safest possible environment for clients
  and their personnel to operate.`;

  textParaghraphImgThree = `<h2>EVENT SECURITY</h2><br>Middle East Security has signicant experience
providing Security Advisors to underpin our clients’
Special Events.<br>
We also liaise with key local event partners to ensure
that appropriate risk mitigation measures are met,
ensuring our clients can focus upon the event’s
priorities.
`;
  textParaghraphImgFour = `<h2>EXECUTIVE PROTECTION</h2><br>Middle East Security provides close protection operatives
  and teams to cover businesses and private individuals.<br>
  We provide sensible discreet and practical solutions to
  protect our clients, enabling them to focus on their
  priorities.`;

  textParaghraphImgFive = `<h2>MANNED SECURITY GUARDING</h2><br>Middle East Security provides security services
  utilized with respectable, well trained vetted and
  discreet security ofcers who are cognizant at
  all times to have the force needed for securing
  the client's business properties and assets.`;
  textParaghraphImgSix = `<h2>MEET & GREET</h2><br>Middle East Security Meet &Greet service provides a quick
  transition through all airport arrival and departure formalities.
  The Meet & Greet service is an elite service provided to our
  VIP clients at the airport arrivals and departures.<br>
  Clients are picked up airside in a luxury car and transported to
  the VIP lounge while our team takes care of Immigration,
  Customs and luggage securing.`;
  textParaghraphImgSeven = `<h2>SECURE TRANSPORTATION</h2><br>Middle East Security offers tailored solutions based upon
  the client's itineraries, travel plans and the risk landscapes
  of the destinations, aligned with Middle East Security
  trained chauffeurs, with high- specication vehicles.<br>
  We can dovetail other security services into Secure
  Transportation requests, such as Close Protection.`;

  constructor() { }

  ngOnInit() {
  }

}
