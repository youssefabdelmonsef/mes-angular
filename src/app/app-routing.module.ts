import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemsModule } from './systems/systems.module';
import { NewsModule } from './news/news.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ServicesModule } from './services/services.module';
import { ClientsModule } from './clients/clients.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomePageModule } from './home-page/home-page.module';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {
    path: 'about-us',
    loadChildren: () => AboutUsModule
  },
  {
    path: 'news',
    loadChildren: () => NewsModule
  },
  {
    path: 'systems',
    loadChildren: () => SystemsModule
  },
  {
    path: 'services',
    loadChildren: () => ServicesModule
  },
  {
    path: 'clients',
    loadChildren: () => ClientsModule
  },
  {
    path: 'contact-us',
    loadChildren: () => ContactUsModule
  },
  {
    path: '**',
    loadChildren: () => HomePageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
