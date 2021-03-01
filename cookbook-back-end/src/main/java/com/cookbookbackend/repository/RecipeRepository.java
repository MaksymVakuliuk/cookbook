package com.cookbookbackend.repository;

import com.cookbookbackend.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    Page<Recipe> findRecipesByParentRecipe_Id(Pageable pageable, Integer id);
}

