import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrimaryImgComponent } from './components/primary-img/primary-img.component';
import { ImgTextComponent } from './components/img-text/img-text.component';

@NgModule({
  declarations: [
    PrimaryImgComponent,
    ImgTextComponent
  ],
  entryComponents: [ // dialogs here
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrimaryImgComponent,
    ImgTextComponent
  ],
  providers: [
  ],
})

export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader (http, './assets/i18n/')
}
