package com.logic.first.ems_backend.repository;

import com.logic.first.ems_backend.model.Reports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportsRepository extends JpaRepository<Reports,Long> {
}
