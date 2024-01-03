import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://mojo.generalmills.com/api/public/content/TlHSx2qFaUKqqRn6IbqoPQ_gmi_hi_res_jpeg.jpeg?v=b576e5a0&t=466b54bb264e48b199fc8e83ef1136b4'
    ),
    new Recipe(
      'B Test Recipe',
      'This is simple a test',
      'https://mojo.generalmills.com/api/public/content/TlHSx2qFaUKqqRn6IbqoPQ_gmi_hi_res_jpeg.jpeg?v=b576e5a0&t=466b54bb264e48b199fc8e83ef1136b4'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
