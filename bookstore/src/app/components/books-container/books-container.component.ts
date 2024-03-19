import { Component } from '@angular/core';
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
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})
export class BooksContainerComponent {
  bookList:BookObj[]=[]

  constructor(public bookService: BookService) { }
  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.bookService.getBookListCall().subscribe(
      (result: any) => {
        this.bookList = result.result;
        console.log(this.bookList);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
