import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemsComponent } from './systems.component';

const routes: Routes = [
  {
    path: '',
    component: SystemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsRoutingModule { }
