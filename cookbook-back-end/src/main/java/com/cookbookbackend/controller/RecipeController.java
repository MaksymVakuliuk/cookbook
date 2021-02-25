package com.cookbookbackend.controller;

import com.cookbookbackend.dto.RecipeDto;
import com.cookbookbackend.dto.RecipeDtoMapper;
import com.cookbookbackend.model.Recipe;
import com.cookbookbackend.service.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recipes")
@AllArgsConstructor
public class RecipeController {
    private RecipeService recipeService;
    private RecipeDtoMapper recipeDtoMapper;

    @GetMapping
    private Page<RecipeDto> getAll(@PageableDefault(sort = "name") Pageable pageable) {
        Page<Recipe> all = recipeService.findAll(pageable);
        Page<RecipeDto> allRecipesDto = all.map(recipeDtoMapper::convertToDto);
        return allRecipesDto;
    }

    @GetMapping("/{id}")
    private RecipeDto getById(@PathVariable Integer id) {
        Recipe recipeById = recipeService.findById(id);
        return recipeDtoMapper.convertToDto(recipeById);
    }
}
