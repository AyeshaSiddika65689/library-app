import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { UserHeaderComponent } from './Components/user-header/user-header.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BooksComponent } from './Components/books/books.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { MatCardModule } from "@angular/material/card";
import { AuthService } from './Services/auth.service';
import { BooksService } from './Services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    UserHeaderComponent,
    HomeComponent,
    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule

  ],
  providers: [AuthService, BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}