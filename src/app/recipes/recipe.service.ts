import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Parmesan',
      'A delicious Italian dish',
      'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg'
    ),
    new Recipe(
      'Chicken Marsala',
      'A delicious Italian dish',
      'https://cafedelites.com/wp-content/uploads/2018/04/Creamy-Chicken-Marsala-IMAGE-21.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
