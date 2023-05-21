package com.example.stylify.dto;

import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
public class ProductDTO {
    private final String name;
    private final String description;
    private final String size;
    private final String image;
    private final String condition;
    private final String category;
    private final double price;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getSize() { return size; }

    public String getBase64Image() {
        return image;
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
