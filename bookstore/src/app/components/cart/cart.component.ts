import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from 'src/app/services/book-services/book.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: number = 1;
  constructor(public bookService: BookService) { 

  }

  productQuantity(value: string) {
    if (this.items < 5 && value == 'max') {
      this.items+=1;
    }
    else if (this.items > 1 && value == 'min') {
      this.items -= 1;
    }
  }
}