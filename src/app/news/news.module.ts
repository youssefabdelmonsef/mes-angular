import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  providers: [
    NewsService
  ],
  entryComponents: [ // dialogs
  ]
})
export class NewsModule { }
