import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
    
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatStepperModule, 
    BrowserAnimationsModule, 
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers:[
    FormBuilder,
    MatNativeDateModule,
  ],
  exports: [SignUpComponent]
})
export class UserModule { }
