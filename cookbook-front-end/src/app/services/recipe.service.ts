import { Injectable } from '@angular/core';
import {IRecipe} from '../interfaces/IRecipe';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = 'http://localhost:8080/recipes';
  // private url = '/assets/data/recipes.json';

  constructor(private http: HttpClient) { }

  // getRecipeList(params): Observable<IRecipe[]> {
  //   return this.http.get<IRecipe[]>(this.url, {params});
  // }

  getRecipeList(params): Observable<any> {
    return this.http.get(this.url, {params});
  }
}
