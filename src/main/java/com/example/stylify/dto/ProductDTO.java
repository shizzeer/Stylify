package com.example.stylify.dto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ProductDTO {
    private final String name;
    private final String description;
    private final String imageUrl;
    private final String condition;
    private final String category;
    private final double price;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getCondition() {
        return condition;
    }

    public String getCategory() {
        return category;
    }

    public double getPrice() {
        return price;
    }
}
