import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book-services/book.service';
import { PageEvent } from '@angular/material/paginator';

interface BookObj {
  "bookName": string,
  "description": string,
  "author": string,
  "quantity": number,
  "price": number,
  "discountPrice": number,
  "_id": string
}

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})
export class BooksContainerComponent {
  bookList:BookObj[]=[]
  pageIndex = 0;
  pageSize: number = 8;
  sorted: string = '';
  searchText: any;

  constructor(public bookService: BookService, public router: Router) { }
  ngOnInit(): void {
    this.getBooksList();
  }

  sortByIncreasingPrice(){
    this.sorted='asc';
    this.getBooksList();
  }

  sortByDecreasingPrice(){
    this.sorted='desc';
    this.getBooksList();
  }
  getBooksList() {
    this.bookService.getBookListCall().subscribe(
      (result: any) => {
        this.bookList = result.result;
        if(this.sorted==='asc'){
          this.bookList.sort((a, b) => a.discountPrice - b.discountPrice);
        }
        else if(this.sorted==='desc'){
          this.bookList.sort((a, b) => b.discountPrice - a.discountPrice);
        }
        console.log(this.bookList);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  bookDetails(id: string){
    this.router.navigate(["/bookstore/bookview",id]);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  getDisplayedBooks(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.bookList.length);
    return this.bookList.slice(startIndex, endIndex);
  }
  
  getTotalBooks(): number {
    return this.bookList.length;
  }

}
