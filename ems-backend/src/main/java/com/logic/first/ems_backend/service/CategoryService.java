package com.logic.first.ems_backend.service;

import com.logic.first.ems_backend.model.Category;

import java.util.List;

public interface CategoryService {
    public List<Category> getCategories();

    String createCategory(Category category);

    String removeUserCategory(Long categoryId);
}
