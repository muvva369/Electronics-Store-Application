import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
// import {MatNativeDateModule, MatDatepickerModule,MatFormFieldModule,MatInputModule } from "@angular/material";
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
  ]
})
export class SignUpComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userFormGroup: FormGroup;
  minDate: Date;
  maxDate: Date;


  constructor(private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.userFormGroup = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],


      country: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],

      userName: ['', Validators.required],
      password: ['', Validators.required],
      securityQuestion: ['', Validators.required],
      securityAnswer: ['', Validators.required],
    })
  }

  user = {
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",

    country: "",
    email: "",
    phone: "",

    userName: "",
    password: "",
    securityQuestion: "",
    securityAnswer: "",
  }

  genders = ['He', 'She', 'They']

  ngOnInit() {

  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}
