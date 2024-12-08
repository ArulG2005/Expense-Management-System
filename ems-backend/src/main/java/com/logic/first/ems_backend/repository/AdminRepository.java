package com.logic.first.ems_backend.repository;

import com.logic.first.ems_backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
}
