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
Most alarm systems provide information to emergency responders with the location of the firre, which supports the process of fire control.`;
textParaghraphImgEight = `<h2>Safety and Security Film</h2><br>
From a security perspective, despite all its benefits, glass generally represents a weak link in a building's 
security and integrity. It may be a hard material but it is also very brittle one, making it 
susceptible to break-ins, facade splintering, and airborne splinters in the event of explosion. 
However, HAVERKAMP has developed a solution that increases the stability of brittle glass materials 
by merging them with a flexible film system. This prevents dangerous glass splinters from becoming 
detached or glass from shattering in the frame.`;
textParaghraphImgNine = `<h2>Metal Detector Gates</h2><br>
A metal detector is an electronic instrument which detects the presence of metal nearby. 
Metal detectors are useful for finding metal inclusions hidden within objects, 
or metal objects buried underground, They often consist of a handheld unit with a sensor 
probe which can be swept over the ground or other objects. If the sensor comes near a 
piece of metal this is indicated by a changing tone in earphones, or a needle moving on an 
indicator. Usually the device gives some indication of distance; the closer the metal is, 
the higher the tone in the earphone or the higher the needle goes. Another common type are 
stationary "walk through" metal detectors used for security screening at access points in prisons, 
courthouses, and airports to detect concealed metal weapons on a person's body.`;
textParaghraphImgTen = `<h2>Road Blockers</h2><br>
The road blocker is deal as a robust alternative to a rising arm barrier and is 
available in widths up to 4m (increments of 50Omm), providing physical veh cle control 
and security for an establishment.<br>
The road blocker is constructed from heavy welded steel section to provide sufficient 
strength to exceed British axle load and complies with BS6571 part 4.<br>
The road blocker is operated ty a hydraulic ram with the power unit (HPU) positioned locally 
within an externally rated cabinet.<br>
It comes with a push-button hold to run control as standard, however it can be customised 
to interface with a wide range of access control equipment to suit specific custormer requirements.`;
textParaghraphImgEleven = `<h2>Tire Killer</h2><br>
Tyre killers are composed by heavy duty spikes that rise from the ground; 
they operate like an access control barrier by preventing the passage of unauthorized 
vehicles or allowing the exit from a supervised area. They can be installed with other 
access control elements (for example bollards, road blockers or gates) in order to achieve an 
access control check-point at the highest level of security. Many optionals items are available 
for in order to configure each individual system.`;
textParaghraphImgTwelve = `<h2>Turnstile Gates</h2><br>
Whether you are looking for optical turnstiles, full height turnstiles, 
waist high turnstiles, or pedestrian gates, Aventura has the product to meet your physical 
access control requirements. Designed to easily integrate within your current security system, 
with minimal maintenance, and superior construction, Aventura™ Turnstiles are a stress free 
addition to any organization.<br>
With rugged outdoor, indoor, mechanical and manual models, we possess 
a solution for every scenario. Our products and services meet the strictest quality standards. 
We offer full consultation, installation, and maintenance services.`;
textParaghraphImgThirteen = `<h2>Mantrap Gates</h2><br>
The square line and small footprint of this monoblock anti-robbery booth ensure optimal 
installation in all settings and make it one of the company's classic products. 
With its curved laminated glass panels built-in to the monoblock, the Ele 2000 - available in 
different versions, complemented by extra features to enhance the standard set-up - is 
designed to be a very versatile anti-robbery booth.`;
textParaghraphImgFourteen = `<h2>Time Attendance</h2><br>
The attendance system is used to monitor the attendance and movement of 
employees within their working hours.<br>
There are many Time Attendance systems to choose from today, from traditional 
time clocks to Time and Attendance Software which offers quick and detailed access 
to information regarding employee punctuality, absence, and worked hours. 
Low cost systems like Time Vision are very affordable and simple to use. Also 
there is the benefit of being able to export this information to spreadsheet or payroll programs.`;
textParaghraphImgFifteen = `<h2>X-Ray Machines</h2><br>
X rays are a form of radiation similar to light rays, except that they are 
more energetic than light rays and are invisible to the human eye. 
They are created when an electric current is passed through a vacuum tube.<br>
X ray scans that show up the organs lurking inside your body are just as useful for 
checking bags at airport check-ins: X rays pass straight through soft materials 
such as leather and plastic but are blocked by the metal in guns, knives, and weapons. 
Typically suitcases and bags travel up through large scanners on conveyor belts, 
with X ray images of their contents appearing instantly on computer screens studied by 
security guards.`;
constructor() { }

  ngOnInit() {
  }

}
