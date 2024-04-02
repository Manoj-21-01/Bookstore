import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public httpService: HttpService) {

   }

   getBookListCall(){
    return this.httpService.getBooksList()
   }

   addToCart(id: string){
    return this.httpService.addCart(id)
   }

   getCartListCall(){
    return this.httpService.getCartList()
   }

   removeBook(id: string){
    return this.httpService.removeBookFromCart(id)
   }

}
