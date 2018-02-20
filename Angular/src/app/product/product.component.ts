import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {BookServiceService} from './../shared/services/book-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @ViewChild('search') query: ElementRef;
  books: any[];
  constructor(private bookService: BookServiceService, private router: Router) { }
  
  getBooksQuery(){
    this.bookService.getQueryData(this.query.nativeElement.value).subscribe(
      (res) => {this.books = res.items; }
    );
  }
  
  ngOnInit() {
     this.bookService.getData().subscribe(
      (res) => {this.books = res.items}
    );
  }
  moveToPage(id){
    id = id.split(" ").join("-").replace('?','');
    this.router.navigate([`products/${id}`]);
  }
  
}
