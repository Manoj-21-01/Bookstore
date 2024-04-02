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
  book: any = {};
  quantityToBuyList:number[]=[];
  cartValue: number = 0;
  selectedAddressType: string = '';

  address: boolean = false;
  addressDetailsSection:boolean = true;

  placeorder: boolean = true;

  orderSummary: boolean = true;
  orderDetails: boolean = false;

  proceedToOrderDetails: boolean = true;

  constructor(public bookService: BookService, public router: Router, private route: ActivatedRoute, public http: HttpClient) { 

  }

  ngOnInit(): void {
    this.getCartList();
  }

  addressTypeChanged(event: any) {
    this.selectedAddressType = event.value;
  }

  getCartList() {
    this.bookService.getCartListCall().subscribe(
      (result: any) => {
        this.cartDetails = result.result
        this.cartDetails.forEach((item: cartDetailsObj) => {
          this.bookList.push(item.product_id);
          this.quantityToBuyList.push(item.quantityToBuy);
        });
        console.log(this.bookList);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  sendBookQuantity(value:number, id:string){
    const obj={
      "quantityToBuy":value
    }
    this.bookService.updateBookQuantity(id,obj).subscribe((result)=>{console.log(result);},
    (error)=>{console.log(error);});
  }

  reduceBook(value:number,id:string,i:number){
    if(value>1)
     {value--;}
    this.sendBookQuantity(value,id);
    this.updateQuantityToBuyList(value,i);
  }

  incrementBook(value:number,avbl:number,id:string,i:number)
  {
    if(value<avbl)
      {value++;}
    else if(value===avbl)
    {
      window.alert("Quantity Reached");
    }
    this.sendBookQuantity(value,id);
    this.updateQuantityToBuyList(value,i);
  }

  updateQuantityToBuyList(value:number,index:number){
    this.quantityToBuyList[index]=value;
    this.cartValue = this.quantityToBuyList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
      }, 0);
  }
  
  removeBook(id:string,index:number){
    this.bookService.removeBook(id).subscribe((result)=>{
      console.log(result);
      this.bookList.splice(index, 1);
      this.quantityToBuyList.splice(index, 1);
      this.cartValue = this.quantityToBuyList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
      }, 0);
    });
    }

    addAddress() {
      this.address = true;
      this.addressDetailsSection = !this.addressDetailsSection;
      this.placeorder = !this.placeorder;
    }

    continue() {
      this.proceedToOrderDetails = false;
      this.orderDetails = !this.orderDetails;
      this.orderSummary = !this.orderSummary;
    }
}