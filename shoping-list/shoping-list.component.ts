import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../recipes/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5)
  ];
  constructor() { }

  ngOnInit() {
  }
  pushNewIngredent(ingredent: Ingredient) {
    this.ingredients.push(ingredent);
  }

}
