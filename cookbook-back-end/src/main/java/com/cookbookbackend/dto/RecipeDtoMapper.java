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
                .parentId(recipe.getParentRecipe() != null
                        ? recipe.getParentRecipe().getId() : null)
                .build();
        return recipeDto;
    }

}
