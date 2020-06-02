import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../constants/images';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  IMAGES = IMAGES;

  textParaghraphImgOne = `الشكر والتقدير لشركة سيبر الروسية احدى شركات روستك القابضة على ثقتها باختيار مجموعة شركة ميدل إيست حليف لمشروعاتها فى جمهورية مصر العربية.
<br>
  وذلك فى أطار تعزيز التعاون الاقتصادى المشترك بين مصر وروسيا خلال المرحلة الحالية.
<br>
  أكد الجانب الروسي خلال اللقاء ان العلاقات الاقتصادية المصرية الروسية علاقات استراتيجية ترتكز على تاريخ طويل من التعاون التجاري والصناعي والاستثماري المشترك، مشيرًا الى أن هناك تفاهمًا كبيرًا بين القيادة السياسية المصرية والروسية لتعزيز مشروعات التعاون الاقتصادي بين البلدين.
<br>
  حضر توقيع الاتفاق بمقر الشركة بالعاصمة الروسية موسكو السادة رؤساء مجلس ادارة الشركتين ونوابهم ومديري الشركات مجموعة `;

  constructor() { }

  ngOnInit() {
  }

}
