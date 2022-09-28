import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  bookDetails = {
    title: '',
    genre: '',
    author: '',
    description: '',
    rating: '',
    image: '',
  };
  constructor(private router: Router, private booksServices: BooksService) {}

  ngOnInit(): void {
    let bookId = localStorage.getItem('editBookId');
    this.booksServices.getLib(bookId).subscribe((data) => {
      this.bookDetails = JSON.parse(JSON.stringify(data));
    });
  }

  updateBook(){
    this.booksServices.updateBooks(this.bookDetails);
    alert('success');
    this.router.navigate(['books']);
  }

}
