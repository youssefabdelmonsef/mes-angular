import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', redirectTo: '/about-us', pathMatch: 'full' 
  },
  {
    path:'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(targetModule => targetModule.AboutUsModule)
  },
  {
    path:'news',
    loadChildren: () => import('./news/news.module').then(targetModule => targetModule.NewsModule)
  },
  {
    path:'systems',
    loadChildren: () => import('./systems/systems.module').then(targetModule => targetModule.SystemsModule)
  },
  {
    path:'services',
    loadChildren: () => import('./services/services.module').then(targetModule => targetModule.ServicesModule)
  },
  {
    path:'clients',
    loadChildren: () => import('./clients/clients.module').then(targetModule => targetModule.ClientsModule)
  },
  {
    path:'contact-us',
    loadChildren: () => import('./clients/clients.module').then(targetModule => targetModule.ClientsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
