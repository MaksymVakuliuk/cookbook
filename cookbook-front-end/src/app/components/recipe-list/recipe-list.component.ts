import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../../interfaces/IRecipe';
import {RecipeService} from '../../services/recipe.service';
import {Page} from '../../interfaces/Page';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  page: Page<IRecipe> = {content: null, totalPages: null, totalElements: null, number: 0, size: 2};
  @Input() isChildrenList = false;
  @Input() parentId: number;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
      this.retrieveRecipe();
  }

  getRequestParams(pageNumber, pageSize): any {
    const params = {};
    if (pageNumber) {
      params[`page`] = pageNumber - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  retrieveRecipe(): void {
    const requestParams = this.getRequestParams(this.page.number, this.page.size);
    console.log('yyyyyyyyyyyyy');
    if (!this.isChildrenList) {
      console.log(this.isChildrenList);
      this.recipeService.getRecipeList(requestParams)
        .subscribe(data => {
          this.page = data;
        });
      // console.log(this.page);
    } else {
      console.log(this.isChildrenList);
      this.recipeService.getChildrenRecipe(requestParams, this.parentId)
        .subscribe(data => {
          this.page = data;
        });
      console.log(this.page);
    }
  }

  handlePageChange($event): void {
    this.page.number = $event;
    this.retrieveRecipe();
  }
}
