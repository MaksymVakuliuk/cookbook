package com.cookbookbackend.service.impl;

import com.cookbookbackend.model.Recipe;
import com.cookbookbackend.repository.RecipeRepository;
import com.cookbookbackend.service.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RecipeServiceImpl implements RecipeService {
    private RecipeRepository repository;

    @Override
    public Page<Recipe> findAllByParentId(Pageable pageable, Integer id) {
        return repository.findRecipesByParentRecipe_Id(pageable, id);
    }

    @Override
    public Page<Recipe> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Recipe findById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public Recipe save(Recipe recipe) {
        return repository.save(recipe);
    }
}
