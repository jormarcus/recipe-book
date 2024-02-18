import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}
}
