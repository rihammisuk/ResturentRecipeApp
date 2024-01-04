import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'I want good recipe',
      'https://mojo.generalmills.com/api/public/content/TlHSx2qFaUKqqRn6IbqoPQ_gmi_hi_res_jpeg.jpeg?v=b576e5a0&t=466b54bb264e48b199fc8e83ef1136b4',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'B Test Recipe',
      'I want sutkir vorta',
      'https://gfjules.com/wp-content/uploads/2018/07/210324-GFJulesCake-R.MoraPhotography-6749.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addgredients(ingredients);
  }
}
