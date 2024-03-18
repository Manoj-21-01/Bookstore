import { HttpService } from '../http-services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) {

   }
   
   registerUser(data:object){
    return this.http.registerApi(data);
  }

  loginUser(data:object){
    return this.http.loginApi(data);
  }

  verifyLoginUser(accessToken:object){
    return this.http.verifyLoginApi(accessToken);
  }
}
