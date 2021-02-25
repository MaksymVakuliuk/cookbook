package com.cookbookbackend.service;

import com.cookbookbackend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RecipeService {
    Page<Recipe> findAll(Pageable pageable);

    Recipe findById(Integer id);

    Recipe save(Recipe recipe);
}
