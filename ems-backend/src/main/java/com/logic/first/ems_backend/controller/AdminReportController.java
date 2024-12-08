package com.logic.first.ems_backend.controller;
import com.logic.first.ems_backend.model.Reports;
import com.logic.first.ems_backend.service.UserReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/admin")
@CrossOrigin(origins = "http//localhost:3000")
public class AdminReportController {

    @Autowired
    private UserReportService userReportService ;

    @GetMapping("/report/getreports")
    public List<Reports> getAllReports(){
        List<Reports> all = userReportService.getAllReports();
        return all;
    }
}
