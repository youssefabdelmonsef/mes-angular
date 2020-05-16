import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { BoardMembersComponent } from './board-members/board-members.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: '', component: WhoWeAreComponent,
      },
      {
        path: 'who-we-are', component: WhoWeAreComponent
      },
      {
        path: 'board-members', component: BoardMembersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
