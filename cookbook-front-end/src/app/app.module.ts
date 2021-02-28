import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe-list/recipe/recipe.component';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RecipeListComponent,
    RecipeComponent
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
