package com.logic.first.ems_backend.repository;

import com.logic.first.ems_backend.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserExpenseRepository extends JpaRepository<Expense,Long> {
}
