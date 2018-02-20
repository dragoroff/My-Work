import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Products } from '../shared/models/products';
import { CartService } from '../shared/services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

    public books: Products[] = [];

    constructor( private cartService: CartService ) { 
        this.cartService.getItems().subscribe( x => this.books = x );
    }

    ngOnInit() {
  }
}
