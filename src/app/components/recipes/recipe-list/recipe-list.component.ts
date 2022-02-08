import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is simply a test", "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540"),
    new Recipe("a", "b", "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540")
  ];
  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipe : Recipe){
    this.onRecipeSelected.emit(recipe);
  }

}
