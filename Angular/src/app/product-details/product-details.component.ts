import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import {BookServiceService} from './../shared/services/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../shared/services/account.service'
import { Products } from '../shared/models/products';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

@Injectable()
export class ProductDetailsComponent implements OnInit {
@Output() toCart: EventEmitter<any> = new EventEmitter<any>();
object: any = {};
status;

  constructor(private bookService: BookServiceService, 
    private activatedRoute: ActivatedRoute, 
    private route: Router,
    private accountService: AccountService,
    private cartService: CartService) { }

  ngOnInit() {

      this.status = this.accountService.isLoggedIn.state;

      this.activatedRoute.params.subscribe(
        params => this.bookService.getQueryData(params.id).subscribe(
          x=> this.object = x.items[0])
      )
  }
  
  backToList(){
    this.route.navigate(['/products'])
  }

  public addToCart(object: Products){
      this.cartService.addToCart(object);
  }

}
