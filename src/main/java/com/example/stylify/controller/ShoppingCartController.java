package com.example.stylify.controller;

import com.example.stylify.dto.CartDTO;
import com.example.stylify.dto.ProductDTO;
import com.example.stylify.model.DefaultResponse;
import com.example.stylify.model.User;
import com.example.stylify.service.ShoppingCartService;
import com.example.stylify.service.UserService;
import org.hibernate.cache.spi.access.CachedDomainDataAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @PostMapping("/add")
    public ResponseEntity<DefaultResponse> addToCart(
            @RequestBody ProductDTO productDTO
    ) {
        return shoppingCartService.add(productDTO);
    }

    @GetMapping("/get")
    public ResponseEntity<CartDTO> get() {
        return shoppingCartService.get();
    }
}
