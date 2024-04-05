import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book-services/book.service';
import { CartLogoService } from 'src/app/services/cart-logo-services/cart-logo.service';
import { HttpService } from 'src/app/services/http-services/http.service';

interface cartObj {
  "quantityToBuy": number
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  bookQuantity:number=0;
  cartDetails:cartObj[]=[];
  cartQuantity: number = 0;
  constructor(public bookService:BookService, public cartLogoService: CartLogoService,private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.getbookQuantity();
    this.updatebookQuantity();
    this.cartLogoService.getCartObservable().subscribe((quantity) => {
      this.cartQuantity = quantity;
    });
  }
  getbookQuantity(){
    this.bookService.getCartListCall().subscribe((result:any)=>{
        this.cartDetails=result.result;
        this.bookQuantity = this.cartDetails.reduce((total, detail) => total + detail.quantityToBuy, 0);
      },
    (error)=>{console.log(error);});
  }
  updatebookQuantity(){
    this.cartLogoService.cart$.subscribe((result)=>{this.bookQuantity=result;},
    (error)=>{console.log(error);});
  }

  logout() {
    this.httpService.removeToken();
    this.router.navigate(['']);
  }

}
