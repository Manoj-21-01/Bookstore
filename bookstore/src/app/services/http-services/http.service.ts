import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  postService(arg0: string, data: {}) {
    throw new Error('Method not implemented.');
  }
  getService(arg0: string) {
    throw new Error('Method not implemented.');
  }
  

  baseUrl: string = "https://bookstore.incubation.bridgelabz.com"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: localStorage.getItem('accessToken') || ""
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

  addFeedback(id: string, data: object){
    return this.http.post(`${this.baseUrl}/bookstore_user/add/feedback/${id}`, data, {headers:this.authHeader})
}

  addCart(){
    return this.http.post(`${this.baseUrl}/bookstore_user/add_cart_item/{product_id}`, {headers:this.authHeader})
  }
}
