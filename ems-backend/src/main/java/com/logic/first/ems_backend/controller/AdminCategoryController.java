package com.logic.first.ems_backend.controller;

import com.logic.first.ems_backend.model.Category;
import com.logic.first.ems_backend.repository.CategoryRepository;
import com.logic.first.ems_backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/admin")
@CrossOrigin(origins = "http//localhost:3000")
public class AdminCategoryController {

    @Autowired
    private CategoryService categoryService;
    @GetMapping("/category/getcategories")
    public List<Category> getAllCategory(){
        List<Category> all = categoryService.getCategories();
        return all;
    }

}
