package com.example.stylify.controller;

import com.example.stylify.dto.UserDTO;
import com.example.stylify.model.Customer;
import com.example.stylify.model.User;
import com.example.stylify.service.CustomerService;
import com.example.stylify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDTO userDTO) {
        String username = userDTO.getUsername();
        String email = userDTO.getEmail();
        String password = userDTO.getPassword();
        String confirmedPassword = userDTO.getConfirmedPassword();
        if (userService.findByUsername(username) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        if (userService.findByEmail(email) != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        if (!Objects.equals(confirmedPassword, password)) {
            return ResponseEntity.badRequest().body("Passwords are different");
        }

        User user = new User(email, username, password);
        Customer customer = new Customer(user.getUserId());
        customerService.save(customer);
        // Making one-to-one relationship with shared PK possible
        user.setCustomer(customer);
        userService.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

}
