import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Parmesan',
      'A delicious Italian dish',
      'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Mozzarella Cheese', 1),
      ]
    ),
    new Recipe(
      'Chicken Marsala',
      'A delicious Italian dish',
      'https://cafedelites.com/wp-content/uploads/2018/04/Creamy-Chicken-Marsala-IMAGE-21.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Marsala Wine', 1),
        new Ingredient('Mushrooms', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
