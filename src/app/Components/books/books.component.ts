import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';
import { BooksModel } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: BooksModel[] = []; // GET for loading books

  
  constructor(private BooksServices: BooksService, private router:Router) {}
  // delete Book
  deleteBook(book: any) {
    this.BooksServices.deleteBooks(book._id).subscribe((data) => {
      this.books = this.books.filter((b) => b !== book);
    });
  }
  // Update Book
  updateBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);
  }


  ngOnInit(): void {
    // Get Book in Page
    this.BooksServices.getBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    });
  }
}
