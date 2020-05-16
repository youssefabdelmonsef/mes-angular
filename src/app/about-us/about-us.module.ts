import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsService } from './about-us.service';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { BoardMembersComponent } from './board-members/board-members.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    WhoWeAreComponent,
    BoardMembersComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ],
  providers: [
    AboutUsService
  ],
  entryComponents: [ // dialogs
  ]
})
export class AboutUsModule { }
