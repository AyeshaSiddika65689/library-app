import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  constructor(
    private dialogePopUp: MatDialog,
    private authServices: AuthService,
    private router: Router
  ) {}
  signOpen() {
    this.dialogePopUp.open(SignupComponent);
  }

  ngOnInit(): void {}

  loginUser() {
    this.authServices.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token', res.token)
        this.router.navigate(['books'])
      }
    )
  }
}