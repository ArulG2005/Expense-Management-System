package com.logic.first.ems_backend.controller;

import com.logic.first.ems_backend.model.Expense;
import com.logic.first.ems_backend.service.UserExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/admin/expense")
@CrossOrigin(origins = "http//localhost:3000")
public class AdminExpenseController {
    @Autowired
    private UserExpenseService userExpenseService;

    @GetMapping("/getexpenses")
    public ResponseEntity<List<Expense>> getExpenses() {
        return ResponseEntity.ok(userExpenseService.getAllExpense());
    }
}
