import { Component, Input } from '@angular/core';
import { BookService } from 'src/app/services/book-services/book.service';

interface BookObj {
  "bookName": string,
  "description": string,
  "author": string,
  "quantity": number,
  "price": number,
  "discountPrice": number,
  "_id": string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() bookData!: BookObj;
  @Input() isVisible: boolean = false;
  constructor(public bookService: BookService){

  }

  
}