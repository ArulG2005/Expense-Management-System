package com.logic.first.ems_backend.service;

import com.logic.first.ems_backend.model.Expense;


import java.util.List;

public interface UserExpenseService {
    public String createExpense(Expense expanse );

    public List<Expense> getAllExpense();

    String removeUserExpense(Long expenseId);
}
