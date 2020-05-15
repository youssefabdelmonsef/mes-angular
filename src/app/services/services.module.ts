import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServicesService } from './systems.service';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ],
  providers: [
    ServicesService
  ],
  entryComponents: [ // dialogs
  ]
})
export class ServicesModule { }
