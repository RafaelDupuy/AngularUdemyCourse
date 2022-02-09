import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe", 
      "This is simply a test", 
      "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe("a",
     "b", 
     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fastfoodmenunutrition.com%2Fwp-content%2Fuploads%2F2015%2F03%2Ffast-food.jpg&f=1&nofb=1",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
     )
  ];
  public selectedRecipe= new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }
}
