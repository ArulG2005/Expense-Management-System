package com.logic.first.ems_backend.service;

import com.logic.first.ems_backend.model.Reports;

import java.util.List;

public interface UserReportService {

    public List<Reports> getReports(Long userId);

    List<Reports> createReport(Reports reports);

    List<Reports> removeUserReport(Long reportId);

    List<Reports> getAllReports();
}
