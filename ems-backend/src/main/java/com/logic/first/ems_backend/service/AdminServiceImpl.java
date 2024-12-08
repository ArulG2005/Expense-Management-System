package com.logic.first.ems_backend.service;
import com.logic.first.ems_backend.model.Admin;
import com.logic.first.ems_backend.model.LoginRequest;
import com.logic.first.ems_backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private AdminRepository adminRepository;
    private Long nextAdminId=1L;

    @Override
    public String createAdmin(Admin admin) {
        admin.setAdminId(nextAdminId);
        adminRepository.save(admin);
        return "Admin Registered sucessfully";
    }

    @Override
    public Admin adminLogin(LoginRequest loginRequest) {
        List<Admin> allAdmin = adminRepository.findAll();
        Optional<Admin> admin = allAdmin.stream()
                .filter(res -> res.getEmail()
                        .equals(loginRequest.getEmail()) && res.getPassword()
                        .equals(loginRequest.getPassword()))
                .findFirst();
        if(admin.isPresent()) {
            return admin.get();
        } else throw  new RuntimeException("Incorrect Admin details");
    }
}
