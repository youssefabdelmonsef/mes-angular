import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrimaryImgComponent } from './components/primary-img/primary-img.component';
import { ImgTextComponent } from './components/img-text/img-text.component';
import { MesTextAreaComponent } from './components/mes-text-area/mes-text-area.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeImgMoreNavComponent } from './components/home-img-more-nav/home-img-more-nav.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    PrimaryImgComponent,
    ImgTextComponent,
    MesTextAreaComponent,
    CarouselComponent,
    HomeImgMoreNavComponent,
    CounterComponent
  ],
  entryComponents: [ // dialogs here
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  exports: [
    PrimaryImgComponent,
    ImgTextComponent,
    MesTextAreaComponent,
    CarouselComponent,
    HomeImgMoreNavComponent,
    SlickCarouselModule,
    CounterComponent
  ],
  providers: [
  ],
})

export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader (http, './assets/i18n/')
}
