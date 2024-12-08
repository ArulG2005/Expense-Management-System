package com.logic.first.ems_backend.controller;
import com.logic.first.ems_backend.model.Admin;
import com.logic.first.ems_backend.model.LoginRequest;
import com.logic.first.ems_backend.model.User;
import com.logic.first.ems_backend.service.AdminService;
import com.logic.first.ems_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
@CrossOrigin(origins = "http//localhost:3000")
public class AdminController {
    @Autowired
    private UserService userService;
    @Autowired
    private AdminService adminService;

    @GetMapping("/getAllUser")
    public List<User> getAllUser(){
        List<User> allUser  = userService.getAllUser();
        return allUser;
    }

    @PostMapping("/register")
    public String createAdmin(@RequestBody Admin admin) {
        adminService.createAdmin(admin);
        return "Registration Successful";
    }

    @PostMapping("/login")
    public String userLogin(@RequestBody LoginRequest loginRequest) {
        Admin admin = adminService.adminLogin(loginRequest);
        return "Login Successful";
    }
}
