import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { BooksComponent } from './Components/books/books.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { UserHeaderComponent } from './Components/user-header/user-header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userHeader', component: UserHeaderComponent },
  { path: 'books', component: BooksComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'update', component: UpdateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
