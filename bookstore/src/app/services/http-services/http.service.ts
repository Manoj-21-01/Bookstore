import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  

  baseUrl: string = "https://bookstore.incubation.bridgelabz.com"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: localStorage.getItem('token') || ""
  })
  constructor(public http: HttpClient) { 

  }

  registerApi(data: object){
    return this.http.post(`${this.baseUrl}/bookstore_user/registration`, data)
  }

  loginApi(data: object){
    return this.http.post(`${this.baseUrl}/bookstore_user/login`, data)
  }
}
