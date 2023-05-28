package com.example.stylify.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

//@RequiredArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private String name;
    private String description;
    private String size;
    private String image;
    private String condition;
    private String category;
    private double price;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String sellerUsername;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer productId;

    public String getSellerUsername() {
        return sellerUsername;
    }

    public Integer getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setSellerUsername(String sellerUsername) {
        this.sellerUsername = sellerUsername;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getDescription() {
        return description;
    }

    public String getSize() { return size; }

    @JsonIgnore
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

    public String getImage() {
        return this.image;
    }
}
