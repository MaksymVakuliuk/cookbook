import {Injectable} from '@angular/core';
import {IRecipe} from '../interfaces/IRecipe';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../interfaces/Page';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private listOfRecipeUrl = 'http://localhost:8080/recipes';
  private recipeByIdUrl = 'http://localhost:8080/recipes/';
  private childrenRecipesUrl = 'http://localhost:8080/recipes/childrenOf/';
  // private url = '/assets/data/recipes.json';

  constructor(private http: HttpClient) { }

  // getRecipeList(params): Observable<IRecipe[]> {
  //   return this.http.get<IRecipe[]>(this.url, {params});
  // }
  //
  getRecipeList(params): Observable<Page<IRecipe>> {
    return this.http.get<Page<IRecipe>>(this.listOfRecipeUrl, {params});
  }

  getRecipeById(id): Observable<IRecipe> {
    console.log(this.recipeByIdUrl + id);
    return this.http.get<IRecipe>(this.recipeByIdUrl + id);
  }

  getChildrenRecipe(params, id): Observable<Page<IRecipe>>{
    console.log(this.childrenRecipesUrl + id);
    return this.http.get<Page<IRecipe>>(this.childrenRecipesUrl + id, {params});
  }
}
