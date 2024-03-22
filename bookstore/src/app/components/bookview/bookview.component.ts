import { Component } from '@angular/core';
import { BookDataService } from 'src/app/services/book-data-services/book-data.service';

interface bookItem {
  "bookName"?:string,
  "author"?:string,
  "quantity"?: number,
  "price"?: number,
  "discountPrice"?:number,
  "_id"?:string
}

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent {
  book:bookItem={};

  constructor(private bookDataService: BookDataService) { }
  ngOnInit(): void {
    this.bookDataService.bookData$.subscribe((details:bookItem)=>
    {
      this.book=details;
      console.log(this.book);
    },
    (error)=>{console.log(error);});
  }
}
