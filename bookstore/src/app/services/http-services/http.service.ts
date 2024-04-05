import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {  
  private token = 'accessToken';
  baseUrl: string = "https://bookstore.incubation.bridgelabz.com"
  private authHeader = new HttpHeaders({
    'Accept':"application/json",
    token: localStorage.getItem('accessToken') || ""
  })
  constructor(public http: HttpClient) { 

  }

  getAuthHeader(): HttpHeaders {
    return this.authHeader;
  }
  removeToken(): void {
    localStorage.removeItem(this.token);
    this.updateAuthHeader();
  }

  private updateAuthHeader(): void {
    this.authHeader = new HttpHeaders({
      'Accept': 'application/json',
      token: localStorage.getItem('accessToken') || ""
    });
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

  updateCartQuantity(id:string,data:any){
    return this.http.put(`${this.baseUrl}/bookstore_user/cart_item_quantity/${id}`,data,{headers:this.authHeader});
  }
}
