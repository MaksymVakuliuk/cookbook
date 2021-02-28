import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../../../interfaces/IRecipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() public recipe: IRecipe;

  constructor() { }

  ngOnInit(): void {
  }

}
