package com.cookbookbackend.controller;

import com.cookbookbackend.dto.RecipeDto;
import com.cookbookbackend.dto.RecipeDtoMapper;
import com.cookbookbackend.model.Recipe;
import com.cookbookbackend.service.RecipeService;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class Test {
    private final RecipeService recipeService;
    private final RecipeDtoMapper recipeDtoMapper;

    @GetMapping("getAll")
    public Page<RecipeDto> getAll(@PageableDefault Pageable pageable) {
        Page<Recipe> all = recipeService.findAll(pageable);
        Page<RecipeDto> recipeDtoPage = all.map(recipeDtoMapper::convertToDto);
        return recipeDtoPage;
    }

    @GetMapping("{id}")
    public RecipeDto getById(@PathVariable Integer id) {
        return recipeDtoMapper.convertToDto(recipeService.findById(id));
    }

    @GetMapping("save")
    public String save() {
        Recipe recipe = new Recipe();
        recipe.setParentRecipe(null);
        recipe.setName("zroot name");
        recipe.setDescription("root recipe");
        recipe.setDateCreated(LocalDateTime.now());
        recipe = recipeService.save(recipe);
        Recipe recipe1 = new Recipe();
        recipe1.setParentRecipe(recipe);
        recipe1.setName("erecipe1 name");
        recipe1.setDescription("root recipe1");
        recipe1.setDateCreated(LocalDateTime.now());
        recipe1 = recipeService.save(recipe1);
        Recipe recipe2 = new Recipe();
        recipe2.setParentRecipe(recipe);
        recipe2.setName("btrecipe2 name");
        recipe2.setDescription("root recipe2");
        recipe2.setDateCreated(LocalDateTime.now());
        recipe2 = recipeService.save(recipe2);
        Recipe recipe3 = new Recipe();
        recipe3.setName("arecipe3 name");
        recipe3.setParentRecipe(recipe1);
        recipe3.setDescription("root recipe3");
        recipe3.setDateCreated(LocalDateTime.now());
        recipe3 = recipeService.save(recipe3);
        return "success";
    }
}
