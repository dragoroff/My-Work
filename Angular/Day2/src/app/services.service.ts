import { Injectable } from '@angular/core';

@Injectable()
export class PizzaService {

  getPizzas(){
 let arr = [];
 for (let i=0; i<100; i++)
 {
  let pizza = {
    diameter:undefined,
    slices: undefined,
    toppings: undefined,
    price: undefined
  }
    pizza.diameter = Math.floor((Math.random()*41) + 10);
    pizza.slices = Math.floor((Math.random()*6)+3);
    pizza.toppings = Math.floor(Math.random()*5);
    pizza.price = pizza.diameter + (pizza.toppings * 5);
    arr.push(pizza);
 }
 return arr;
}
}
