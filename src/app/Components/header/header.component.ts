import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialogePopUp: MatDialog) {}

  signOpen() {
    this.dialogePopUp.open(SignupComponent);
  }
  logOpen() {
    this.dialogePopUp.open(LoginComponent);
  }

  ngOnInit(): void {}
}
