import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Products } from '../models/products';

@Injectable()
export class CartService{
    private bookInCartSubject: BehaviorSubject<Products[]> = new BehaviorSubject([]);
    private booksInCart: Products[] = [];

    constructor(){
        this.bookInCartSubject.subscribe(x => this.booksInCart = x);
    }

    public addToCart(item: Products){
        this.bookInCartSubject.next([...this.booksInCart, item]);
    }

    public getItems(): Observable<Products[]>{
        return this.bookInCartSubject;
    }

}