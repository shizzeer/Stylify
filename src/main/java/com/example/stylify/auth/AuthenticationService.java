package com.example.stylify.auth;

import com.example.stylify.config.JwtService;
import com.example.stylify.model.Customer;
import com.example.stylify.model.Role;
import com.example.stylify.model.User;
import com.example.stylify.repository.UserRepository;
import com.example.stylify.service.CustomerService;
import com.example.stylify.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    private final CustomerService customerService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        String username = request.getUsername();
        String email = request.getEmail();
        String password = request.getPassword();
        String confirmedPassword = request.getConfirmedPassword();
        if (userService.findByUsername(username).isPresent()) {
            return AuthResponse.builder()
                    .token("")
                    .message("Username already exists")
                    .build();
        }
        if (userService.findByEmail(email).isPresent()) {
            return AuthResponse.builder()
                    .token("")
                    .message("Email already exists")
                    .build();
        }
        if (!Objects.equals(password, confirmedPassword)) {
            return AuthResponse.builder()
                    .token("")
                    .message("Typed passwords are different")
                    .build();
        }
        String passwordComplexityInfo = userService.checkPasswordComplexity(password);
        if (!Objects.equals(passwordComplexityInfo, "Password is valid")) {
            return AuthResponse.builder()
                    .token("")
                    .message(passwordComplexityInfo + " Must be at least 8 characters and contain a number or symbol")
                    .build();
        }

        User user = new User(email, username, passwordEncoder.encode(password), Role.USER);
        Customer customer = new Customer(user.getUserId());
        customerService.save(customer);
        // Making one-to-one relationship with shared PK possible
        user.setCustomer(customer);
        userService.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .token(jwtToken)
                .message("Account registered successfully")
                .build();
    }

    public ResponseEntity<AuthResponse> authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            AuthResponse authResponse = AuthResponse.builder()
                    .token("")
                    .message("Incorrect email or password")
                    .build();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authResponse);
        }

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        System.out.println("Token po zalogowaniu sie: " + jwtToken);

        AuthResponse authResponse = AuthResponse.builder()
                .token(jwtToken)
                .message("Login successful")
                .build();
        return ResponseEntity.ok(authResponse);
    }
}
