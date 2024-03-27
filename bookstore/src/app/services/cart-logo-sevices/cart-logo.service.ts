import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartLogoService {
  private iconSubject = new BehaviorSubject<string>('shopping_cart');
  icon$ = this.iconSubject.asObservable();
  private badgeCountSubject = new BehaviorSubject<number>(0);
  badgeCount$ = this.badgeCountSubject.asObservable();

  updateIcon(icon: string) {
    this.iconSubject.next(icon);
  }

  updateBadgeCount(count: number) {
    this.badgeCountSubject.next(count);
  }
}
