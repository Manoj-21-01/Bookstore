import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book-services/book.service';

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
  initialValue:number = 0;
  comment:string = "";
  stars: number[] = [1,2,3,4,5]

  constructor(public bookService: BookService, public route: ActivatedRoute) { }
  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');
    console.log(idParam);

    if(idParam !==null)
    {
    this.bookService.getBookListCall().subscribe((result:any)=>{      
      for (let item of result.result)
      {
        if(item._id==idParam)
        {
          this.book=item;
          console.log(item);
        }
      }});
    }
  }

  setRating(star: number){
    this.initialValue = star;
  }
}
