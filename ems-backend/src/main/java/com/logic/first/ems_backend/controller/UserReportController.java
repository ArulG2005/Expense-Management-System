package com.logic.first.ems_backend.controller;
import com.logic.first.ems_backend.model.Category;
import com.logic.first.ems_backend.model.Reports;
import com.logic.first.ems_backend.service.CategoryService;
import com.logic.first.ems_backend.service.UserReportService;
import com.logic.first.ems_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
@CrossOrigin(origins = "http//localhost:3000")
public class UserReportController {
    @Autowired
    private UserReportService userReportService;
    @Autowired
    private UserService userService;


    @PostMapping("/{userId}/report/add")
    public ResponseEntity<List<Reports>> addUserExpense(@RequestBody Reports reports, @PathVariable Long userId) {
        reports.setUserId(userId);
        reports.setUserName(userService.getUserById(userId).getUserName());
        List<Reports> respose = userReportService.createReport(reports);
        return ResponseEntity.ok(respose);
    }

    @DeleteMapping("/{userId}/report/delete/{reportId}")
    public ResponseEntity<List<Reports>> deleteUserExpense(@PathVariable Long userId, @PathVariable Long reportId ) {
        List<Reports> respose = userReportService.removeUserReport(reportId );
        return ResponseEntity.ok(respose);
    }

    @GetMapping("/{userId}/report/all")
    public List<Reports> getReports(@PathVariable Long userId) {
        List<Reports> allReports = userReportService.getReports(userId);
        List<Reports> valid = allReports.stream()
                .filter(res -> res.getUserId().equals(userId))
                .toList();
        return valid;
    }



}
