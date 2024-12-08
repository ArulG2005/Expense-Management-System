package com.logic.first.ems_backend.service;

import com.logic.first.ems_backend.model.LoginRequest;
import com.logic.first.ems_backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    public User createUser(User user);
    public User getUserById(Long userId);
    public User userLogin(LoginRequest loginRequest);
    public List<User> getAllUser();
}
