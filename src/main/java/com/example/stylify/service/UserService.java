package com.example.stylify.service;

import com.example.stylify.model.User;
import com.example.stylify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public String checkPasswordComplexity(String password) {
        String pattern = "^(?=.*[\\p{Punct}])(?=.*\\d).+$";
        if (password.length() < 8) {
            return "Your password is too short.";
        }
        else if (!password.matches(pattern)) {
            return "Your password must have a symbol and number.";
        }
        return "Password is valid";
    }
}
