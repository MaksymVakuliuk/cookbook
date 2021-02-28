import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../../../interfaces/IRecipe';
import {RecipeService} from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() public recipe: IRecipe;
  parentRecipeVisibility = false;
  childrenRecipesVisibility = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }


  toggleParentVisibility(): void {
    this.parentRecipeVisibility = !this.parentRecipeVisibility;
    this.recipeService.getRecipeById(this.recipe.parent_id).subscribe(data => this.recipe.parentRecipe = data);
  }

  toggleChildrenVisibility(): void {
    this.childrenRecipesVisibility = !this.childrenRecipesVisibility;
    // this.recipeService.getChildrenRecipe(this.recipe.id).subscribe(data => this.recipe.childrenRecipe = data);
  }
}
