import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface bookItem {
  "bookName"?:string,
  "author"?:string,
  "quantity"?: number,
  "price"?: number,
  "discountPrice"?:number,
  "_id"?:string
}

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  public bookData: BehaviorSubject<bookItem> = new BehaviorSubject<bookItem>({});
  public bookData$ = this.bookData.asObservable();

  constructor() { }

  setData(bookItems:bookItem){
    this.bookData.next(bookItems);
  }

}
