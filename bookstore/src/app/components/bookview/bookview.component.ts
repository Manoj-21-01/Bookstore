import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book-services/book.service';
import { CartLogoService } from 'src/app/services/cart-logo-sevices/cart-logo.service';

interface bookItem {
  "bookName"?:string,
  "author"?:string,
  "quantity"?: number,
  "price"?: number,
  "discountPrice"?:number,
  "_id"?:string
}

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent {
  addBookToCart: boolean = true;
  items: number = 1;
  bookList: bookItem[] = [];
  book:bookItem={};
  initialValue:number = 0;
  comment:string = "";
  stars: number[] = [1,2,3,4,5]
  idUser: string="";

  constructor(public bookService: BookService, public route: ActivatedRoute, public cartLogoService: CartLogoService) { }
  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');
    console.log(idParam);
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
    this.bookService.addToCart(this.idUser).subscribe((result:any)=>{
      this.bookList = result.result._id;
      console.log(this.bookList);
    },
    (error)=>{
      console.log(error);
    }
  );
  }

  toggleButton () {
    this.addBookToCart = !this.addBookToCart;
  }

  // updateCartIcon() {
  //   this.cartLogoService.badgeCount$.subscribe(count => {
  //     this.cartLogoService.updateBadgeCount(count + 1);
  //   });
  // }
}
