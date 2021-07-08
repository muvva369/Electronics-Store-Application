import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { EnrollServiceComponent } from './enroll-service/enroll-service.component';
import { ServiceStatusComponent } from './service-status/service-status.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { StopServiceComponent } from './stop-service/stop-service.component';


@NgModule({
  declarations: [
    EnrollServiceComponent,
    ServiceStatusComponent,
    UpdateServiceComponent,
    StopServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
