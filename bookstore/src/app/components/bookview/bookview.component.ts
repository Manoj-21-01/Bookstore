import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book-services/book.service';
import { CartLogoService } from 'src/app/services/cart-logo-services/cart-logo.service';
import { HttpService } from 'src/app/services/http-services/http.service';

interface bookItem {
  "bookName"?:string,
  "description"?: string,
  "author"?:string,
  "quantity"?: number,
  "price"?: number,
  "discountPrice"?:number,
  "_id"?:string
}

interface cartDetailsObj{
  "product_id":bookItem,
  "quantityToBuy": number,
  "_id":string
}

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {
  addBookToCart: boolean = true;
  items: number = 1;
  bookList: bookItem[] = [];
  book:bookItem={};
  initialValue:number = 0;
  comment:string = "";
  stars: number[] = [1,2,3,4,5]
  idUser: string="";
  cartItem: cartDetailsObj[]=[];
  cartItemId: string='';
  cartState: boolean = false;
  cartQuantity: number = 0;
  bookQuantity: number=0;
  bookQuantityInCart: number=1;
  quantity: number = 0;

  constructor(public bookService: BookService, public route: ActivatedRoute, public cartLogoService: CartLogoService, public httpService:HttpService) { }
  ngOnInit(): void {
    this.cartLogoService.cart$.subscribe((quantity) => {
      this.bookQuantity = quantity;
    });

    const idParam = this.route.snapshot.paramMap.get('id');

    if(idParam!==null){
    this.idUser =idParam;}

    console.log(`${this.idUser}`);

    if(idParam !==null)
    {
    this.bookService.getBookListCall().subscribe((result:any)=>{      
      for (let item of result.result)
      {
        if(item._id==idParam)
        {
          this.book=item;
          console.log(item);
        }
      }});
    }
  }

  setRating(star: number){
    this.initialValue = star;
  }


  addToCart() {
    this.bookService.addToCart(this.idUser).subscribe((result: any) => {
      if (result.success) {
        const currentQuantity = this.cartLogoService.getCartQuantity();
        this.cartLogoService.updateCartQuantity(currentQuantity + 1);
        this.addBookToCart = !this.addBookToCart;
      }
    },
    (error) => {
      console.log(error);
    });
  }
  
  

  getCartItems(){
    this.bookService.getCartListCall().subscribe((result:any)=>{
        this.cartItem=result.result;
        let bookInCart = this.cartItem.some(item => item.product_id._id === this.book._id);
        if(bookInCart) {
            console.log("Book Present in Cart");
            let item = this.cartItem.find(item => item.product_id._id === this.book._id);
            if (item) {
                this.addBookToCart=true;
                this.bookQuantityInCart=item.quantityToBuy;
                console.log(`Book Quantity In Cart ${this.bookQuantityInCart}`);
                this.cartItemId=item._id;
            }
        } else {
            console.log("Book not in cart");
            this.addBookToCart=false;
            this.bookQuantityInCart=0;
        }
    },
    (error)=>{console.log(error);});
}

reduceBook(){
  if(this.bookQuantityInCart>1)
  {
    this.bookQuantityInCart-=1;
    this.sendBookQuantity();
  }
 
}

incrementBook(){
  if(this.bookQuantityInCart<this.quantity){
    this.bookQuantityInCart+=1;
  }
  else if(this.bookQuantityInCart===this.quantity)
  {
    window.alert("Quantity Reached");
  }
  this.sendBookQuantity();
}

  sendBookQuantity(){   
    if(this.cartItemId)
    {      
      const obj1={
        "quantityToBuy": this.bookQuantityInCart
      }
    this.httpService.updateCartQuantity(this.cartItemId,obj1).subscribe((result)=>{
      console.log(result);
    },
    (error)=>{console.log(error);});    
    
    }
  }
}
