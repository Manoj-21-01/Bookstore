import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartLogoService {

  constructor() { }
  cartQuantity: number = 0;
  private cartQuantitySubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cart$=this.cartQuantitySubject.asObservable();

  updateCartQuantity(quantity:number) {    
    this.cartQuantity = quantity;
    this.cartQuantitySubject.next(quantity);
  }

  getCartQuantity(): number {
    return this.cartQuantity;
  }

  getCartObservable() {
    return this.cartQuantitySubject.asObservable();
  }
}
