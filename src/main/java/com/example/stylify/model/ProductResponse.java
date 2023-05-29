package com.example.stylify.model;

import com.example.stylify.dto.ProductDTO;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
@NoArgsConstructor
public class ProductResponse {
    private ProductDTO product;
    private String error = "";

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
        this.product = product;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
