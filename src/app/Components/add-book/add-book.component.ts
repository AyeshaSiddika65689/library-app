import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookDetails = {
    title: '',
    genre: '',
    author: '',
    description: '',
    rating: '',
    image: '',
  };
  constructor(private addBooksServices: BooksService, private router:Router) {}

  ngOnInit(): void {}

  addBooks() {
    console.log(this.bookDetails);
    this.addBooksServices.addBooks(this.bookDetails).subscribe((res) => {
      alert('Book added sucessfully');
      this.router.navigate(['books']);
    });
  }
}
