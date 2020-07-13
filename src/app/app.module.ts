import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesHeaderComponent } from './mes-header/mes-header.component';
import { MesFooterComponent } from './mes-footer/mes-footer.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NewsModule } from './news/news.module';
import { SystemsModule } from './systems/systems.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule, HttpLoaderFactory } from './shared/shared.module';
import { HomePageModule } from './home-page/home-page.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MesHeaderComponent,
    MesFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AboutUsModule,
    NewsModule,
    SystemsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
