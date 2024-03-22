import { Component, EventEmitter, Output } from '@angular/core';
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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Output() addToCart = new EventEmitter<BookObj>();
  constructor(public bookService: BookService) { 

  }

}
