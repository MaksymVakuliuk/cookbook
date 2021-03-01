import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe-list/recipe/recipe.component';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecipeFormComponent } from './components/create-recipe-form/create-recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RecipeListComponent,
    RecipeComponent,
    CreateRecipeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
