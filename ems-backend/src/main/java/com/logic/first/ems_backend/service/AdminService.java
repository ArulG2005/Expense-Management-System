package com.logic.first.ems_backend.service;

import com.logic.first.ems_backend.model.Admin;
import com.logic.first.ems_backend.model.LoginRequest;

public interface AdminService {
    public String createAdmin(Admin admin);
    public Admin adminLogin(LoginRequest loginRequest);
}
