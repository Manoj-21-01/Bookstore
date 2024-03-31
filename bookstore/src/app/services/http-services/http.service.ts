import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {  

  baseUrl: string = "https://bookstore.incubation.bridgelabz.com"
  private authHeader = new HttpHeaders({
    token: localStorage.getItem('accessToken') || ""
  })
  constructor(public http: HttpClient) { 

  }

  registerApi(data: object){
    return this.http.post(`${this.baseUrl}/bookstore_user/registration`, data)
  }

  loginApi(data: object){
    return this.http.post(`${this.baseUrl}/bookstore_user/login`, data)
  }

  getBooksList(){
    return this.http.get(`${this.baseUrl}/bookstore_user/get/book`, {headers:this.authHeader})
  }

  addCart(id: string){
    return this.http.post(`${this.baseUrl}/bookstore_user/add_cart_item/${id}`,{}, {headers:this.authHeader})
  }

  getCartList(){
    return this.http.get(`${this.baseUrl}/bookstore_user/get_cart_items`, {headers:this.authHeader})
  }

  removeBookFromCart(id: string){ 
    return this.http.delete(`${this.baseUrl}/bookstore_user/remove_cart_item/${id}`, {headers:this.authHeader})
  }
}
