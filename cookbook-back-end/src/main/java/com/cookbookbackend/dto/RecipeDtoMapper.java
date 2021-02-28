package com.cookbookbackend.dto;

import com.cookbookbackend.model.Recipe;
import org.springframework.stereotype.Component;

@Component
public class RecipeDtoMapper {

    public RecipeDto convertToDto(Recipe recipe) {
        RecipeDto recipeDto = RecipeDto.builder()
                .id(recipe.getId())
                .dateCreated(recipe.getDateCreated())
                .name(recipe.getName())
                .description(recipe.getDescription())
                .parentRecipe(recipe.getParentRecipe())
                .childrenRecipes(recipe.getChildren()).build();
        return recipeDto;
    }

    public SimpleRecipeDto convertToSimpleRecipeDto(Recipe recipe) {
        SimpleRecipeDto simpleRecipeDto = SimpleRecipeDto.builder()
                .id(recipe.getId())
                .dateCreated(recipe.getDateCreated())
                .name(recipe.getName())
                .description(recipe.getDescription())
                .parentId(recipe.getParentRecipe() != null ?
                        recipe.getParentRecipe().getId() : null)
                .build();
        return simpleRecipeDto;
    }

}
