import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../../interfaces/IRecipe';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[];
  count: number;
  page = 0;
  pageSize = 2;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.retrieveRecipe();
  }

  getRequestParams(page, pageSize): any {
    const params = {};
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveRecipe(): void {
    const requestParams = this.getRequestParams(this.page, this.pageSize);
    this.recipeService.getRecipeList(requestParams)
      //.subscribe(data => this.recipes = data['content']);
      .subscribe(data => {
        const {content, totalElements} = data;
        this.recipes = content;
        this.count = totalElements;
      });
  }

  handlePageChange($event): void {
    this.page = $event;
    this.retrieveRecipe();
  }
}
