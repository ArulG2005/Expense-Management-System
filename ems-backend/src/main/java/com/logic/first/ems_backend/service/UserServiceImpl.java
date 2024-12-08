package com.logic.first.ems_backend.service;

import com.logic.first.ems_backend.model.LoginRequest;
import com.logic.first.ems_backend.model.User;
import com.logic.first.ems_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    private Long nextId = 1L;

    @Override
    public List<User> getAllUser(){
        List<User> allUser = userRepository.findAll();
        return allUser;
    }
    @Override
    public User createUser(User user) {
        user.setUserId(nextId++);
        return (User) userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()) {
            return user.get();
        } else throw  new RuntimeException("User not found");
    }
    @Override
    public User userLogin(LoginRequest loginRequest) {
        List<User> allUser = userRepository.findAll();
        Optional<User> user = allUser.stream()
                        .filter(res -> res.getEmail()
                        .equals(loginRequest.getEmail()) && res.getPassword()
                        .equals(loginRequest.getPassword()))
                        .findFirst(); // Find the first matching user
        if(user.isPresent()) {
            return user.get();
        } else throw  new RuntimeException("Wrong Details");
    }

    // Save a new user
    public User saveUser(User user) {
        user.setUserId(nextId);
        return userRepository.save(user);
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


}
