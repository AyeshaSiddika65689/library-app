import { Component, OnInit } from '@angular/core';
import { PatternValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userDetails = {
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
  };

  constructor(
    private dialogePopUp: MatDialog,
    private authServices: AuthService
  ) {}

  loginOpen() {
    this.dialogePopUp.open(LoginComponent);
  }
  ngOnInit(): void {}

  SignUp() {
    console.log(this.userDetails);
    this.authServices.signUp(this.userDetails).subscribe((res) => {
      alert('Sign up Sucessfull');
    });
  }
}
