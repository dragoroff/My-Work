import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services.service'

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: any[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }

}
