package com.example.stylify.dto;

import com.example.stylify.model.Product;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
public class CartDTO {
    private Set<ProductDTO> products;
    private double total;

    public Set<ProductDTO> getProducts() {
        return products;
    }

    public void setProducts(Set<ProductDTO> products) {
        this.products = products;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
