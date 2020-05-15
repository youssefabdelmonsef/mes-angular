import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesHeaderComponent } from './mes-header/mes-header.component';
import { MesFooterComponent } from './mes-footer/mes-footer.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NewsModule } from './news/news.module';
import { SystemsModule } from './systems/systems.module';

@NgModule({
  declarations: [
    AppComponent,
    MesHeaderComponent,
    MesFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutUsModule,
    NewsModule,
    SystemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
