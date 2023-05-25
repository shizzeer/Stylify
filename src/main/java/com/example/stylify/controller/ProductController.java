package com.example.stylify.controller;

import com.example.stylify.dto.ProductDTO;
import com.example.stylify.model.DefaultResponse;
import com.example.stylify.model.Product;
import com.example.stylify.model.User;
import com.example.stylify.service.ProductService;
import com.example.stylify.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final UserService userService;

    @PostMapping("/sell")
    public ResponseEntity<DefaultResponse> sell(
            @RequestBody ProductDTO productDTO
    ) {
        DefaultResponse response = new DefaultResponse();
        try {
            String name = productDTO.getName();
            String description = productDTO.getDescription();
            String size = productDTO.getSize();
            String base64Image = productDTO.getBase64Image();
            byte[] image = Base64.getDecoder().decode(base64Image);
            String condition = productDTO.getCondition();
            String category = productDTO.getCategory();
            double price = productDTO.getPrice();

            if (price <= 0) {
                response.setError("Incorrect price");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }
            if (name == null || condition == null || category == null) {
                response.setError("Name, condition or category not set");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }

            Product product = new Product();
            product.setName(name);
            product.setDescription(description);
            product.setSize(size);
            product.setImage(image);
            product.setCondition(condition);
            product.setPrice(price);
            product.setCategory(category);

            User user = userService.getAuthenticatedUser();
            product.setUser(user);
            productService.save(product);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setError("Unexpected error, please try again");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        response.setMessage("Product added successfully!");
        return ResponseEntity.ok(response);
    }
}
