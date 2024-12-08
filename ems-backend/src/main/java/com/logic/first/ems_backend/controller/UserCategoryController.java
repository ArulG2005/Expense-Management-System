package com.logic.first.ems_backend.controller;
import com.logic.first.ems_backend.model.Category;
import com.logic.first.ems_backend.service.CategoryService;
import com.logic.first.ems_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "http//localhost:3000")
public class UserCategoryController {

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @PostMapping("/{userId}/category/add")
    public ResponseEntity<List<Category>> addUserCategory(@RequestBody Category category, @PathVariable Long userId) {
        category.setUserId( userId);
        category.setUserName(userService.getUserById(userId).getUserName());
        String respose = categoryService.createCategory(category);
        return ResponseEntity.ok(categoryService.getCategories());
    }

    @DeleteMapping("/{userId}/category/delete/{categoryId}")
    public ResponseEntity<List<Category>> deleteUserExpense(@PathVariable Long userId, @PathVariable Long categoryId ) {
        String respose = categoryService.removeUserCategory(categoryId );
        return ResponseEntity.ok(categoryService.getCategories());
    }

    @GetMapping("/{userId}/category/all")
    public List<Category> getCategories(@PathVariable Long userId) {
        List<Category> allCategory = categoryService.getCategories();
        List<Category> valid = allCategory.stream()
                .filter(res -> res.getUserId().equals(userId))
                .toList();
        return valid;
    }

}
