import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemsComponent } from './systems.component';
import { SystemsRoutingModule } from './systems-routing.module';
import { SystemsService } from './systems.service';

@NgModule({
  declarations: [
    SystemsComponent
  ],
  imports: [
    CommonModule,
    SystemsRoutingModule,
    SharedModule
  ],
  providers: [
    SystemsService
  ],
  entryComponents: [ // dialogs
  ]
})
export class SystemsModule { }
