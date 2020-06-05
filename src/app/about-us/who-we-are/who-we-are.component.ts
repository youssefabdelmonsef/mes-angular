import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/constants/images';

@Component({
  selector: 'who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']

})

export class WhoWeAreComponent implements OnInit {

  IMAGES = IMAGES;

  textParaghraphImgTwo = `<h4>Our company</h4><br>Middle East Security Group has the support of their sister
  companies Middle East Advisory & Middle East Systems.
  We integrate the three solutions along with our staff and
  knowledge in offering a wide variety of services.<br>
  Middle East Security has highly trained and licensed
  operators compliant with the international standards of the
  Security Industry.<br>
  Middle East Security constantly ensures that our proposed
  services are up to date, using the latest training equipment
  and technology in order to reach the maximum satisfaction
  of our clients.<br>
  All operations are managed and supervised 7/24 by our
  expert Account Managers.<br>
  Middle East Security clients are considered our success
  associates.<br>
  Middle East Security Quality Management System focuses
  on delivering client orientation and cost-effective services
  to match our values.`;

  textParaghraphImgThree = `<strong style="font-family: sans-serif; font-weight: bold;">Middle East Advisory</strong> was established in 2016, by an elite
  group of risk management and compliance consultants and
  trainers, highly experienced technical and well-trained
  administrators who use state-of-the-art leadership
  techniques.<br>
  Middle East Advisory provides its services throughout our
  global network of consultants.
  Middle East Advisory, advises its multinational clients and
  partners across the Middle East and Regions of Africa
  about the most dependable way to protect themselves
  against various sources of risks.`;

  textParaghraphImgFour = `<h4>Our Mission</h4><br>Identify and mitigate our client’s risks, to be able to
  operate safely with efciency and provide a wide range of
  high-quality security solutions in order to ensure our
  client’s satisfaction.`;

  textParaghraphImgFive = `<h4>Our Vision</h4><br>To be recognized as the leading accredited security
  company, providing quality security-related services in our
  local business community.`;

  constructor() {}

  ngOnInit() {
  }

}