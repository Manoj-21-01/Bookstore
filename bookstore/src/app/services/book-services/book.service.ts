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

   getCartList(){
    return this.httpService.addCart()
   }
}
