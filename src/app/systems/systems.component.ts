import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';
import { BORDER_LINE_COLOR } from '../shared/components/img-text/img-text.component';

@Component({
  selector: 'systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {

  IMAGES = IMAGES;

  BORDER_LINE_COLOR = BORDER_LINE_COLOR.ORANGE;

  textParaghraphImgTwo = `<h2>Access Control System</h2><br>
  Access Control describes any technique used to control passage
into or out of any area.<br>
The standard lock that uses a brass key may be thought of as a
simple form of an Access Control System.<br>
Over the years, access control systems have become more and
more complicated. Today, the term “access control system” most
often refers to a computer-based electronic card.<br>
The electronic door access control system uses a special access
card rather than a brass key to permit access into the secured
area.`;
  textParaghraphImgThree = `<h2>Closed Circuit Television CCTV</h2><br>
  CCTV records directly to a videotape recorder, which projects analog signals as pictures.<br>
If the analog signals are recorded to tape, then the tape must run at a very slow speed to operate continuously.<br>
Therefore, to allow a three-hour tape to run for 24 hours, it
must be set to run on a time lapse basis, which is usually
about four frames in a second.`;
  textParaghraphImgFour = `<h2>Intelligent Video Analyzing Solutions</h2><br>
  The growing demand for more details and the rising
number of network cameras has grown.<br>
Skyrocketing amounts of data need to be viewed when looking for
evidence or monitoring lively.<br>
To tailor your exact needs, Bosch offers two different types of
video analytics Essential Video Analytics and Intelligent Video
Analytics.<br>
Bosch video analytics help in keeping the data manageable; it adds
metadata to provide sense and structure to your video footage in
the process of capturing. This enables you to stream only what’s
relevant, retrieve evidence speedily and clearly, besides triggering
alarms when needed.<br>
This resolves the need to process hours of video data, making it
more tractable and manageable.`;
  textParaghraphImgFive = `<h2>Fleet Tracking</h2><br>
  Today’s satellite global positioning system, or GPS, is the
base for a technology popular with commercial motor vehicle
operators in asset management, which can include vehicles,
equipment, and personnel.<br>
GPS tracking allows fleet management professionals to make
the best use of their assets as it reduces expenses and
enhances productivity.`;
  textParaghraphImgSix = `<h2>Intrusion Detection Systems</h2><br>
  Intrusion Detection Systems provide information systems to
support defeating attacks.<br>
They accomplish this by collecting information from a variety of
systems and network sources and then analyzing the information
for any possible security problems.<br>
Intrusion Detection Systems provide the following:<br>
• Monitoring and analysis of user and system activity.<br>
• Auditing of system congurations and vulnerabilities.<br>
• Assessing the integrity of the critical system and data files.<br>
• Statistical analysis of activity patterns, based on the matching to discover attacks.<br>
• Irregular activity analysis.<br>
• Operating system audits.<br>`;
  textParaghraphImgSeven = `<h2>Fire Alarm systems</h2><br>
Fire detection systems are designed to discover fires at its early development, which eases safe evacuation of occupants.<br>
Early detection also plays a signicant role in protecting your assets.<br>
Property loss can be reduced and downtime through early detection.<br>
Most alarm systems provide information to emergency responders with the location of the re, which supports the process of re control.`;
  
constructor() { }

  ngOnInit() {
  }

}
