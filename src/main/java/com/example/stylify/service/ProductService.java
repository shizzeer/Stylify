package com.example.stylify.service;

import com.example.stylify.model.Product;
import com.example.stylify.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public void sell(Product product) {
        save(product);
    }

    public void save(Product product) {
        productRepository.save(product);
    }
}
