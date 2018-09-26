import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    ),
    new Recipe(
      'A New User Test',
      '1234 This is simple a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    )
  ];
  constructor() { }
  getRecipes() {
    return this.recipes.slice();
  }

}
