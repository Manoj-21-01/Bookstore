import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book-services/book.service';
import { HttpClient } from '@angular/common/http';

interface BookObj {
  "bookName": string,
  "description": string,
  "author": string,
  "quantity": number,
  "price": number,
  "discountPrice": number,
  "_id": string
}

interface cartDetailsObj{
  "product_id":BookObj,
  "quantityToBuy": number,
  "_id":string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  bookList:BookObj[]=[]
  cartDetails:cartDetailsObj[]=[];
  items: number = 1;
  book: any = {};
  quantityToBuyList:number[]=[];
  constructor(public bookService: BookService, public router: Router, private route: ActivatedRoute, public http: HttpClient) { 

  }

  ngOnInit(): void {
    this.getCartList();
  }

  productQuantity(value: string) {
    if (this.items < 5 && value == 'max') {
      this.items+=1;
    }
    else if (this.items > 1 && value == 'min') {
      this.items -= 1;
    }
  }
  getCartList() {
    this.bookService.getCartListCall().subscribe(
      (result: any) => {
        this.cartDetails = result.result
        this.cartDetails.map((item: cartDetailsObj) => {
          this.bookList.push(item.product_id);
        });
        console.log(this.bookList);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  removeBook(id:string,index:number){
    this.bookService.removeBook(id).subscribe((result)=>{
      console.log(result);
      this.bookList.splice(index, 1);
    });
    }
}