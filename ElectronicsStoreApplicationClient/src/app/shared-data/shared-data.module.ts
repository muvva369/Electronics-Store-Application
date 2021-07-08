import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataComponent } from './shared-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SharedDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({})
  ]
})
export class SharedDataModule { }
