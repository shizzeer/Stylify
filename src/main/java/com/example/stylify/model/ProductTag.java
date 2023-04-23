package com.example.stylify.model;

public class ProductTag {
    private Integer id;
    private Integer productId;
    private Integer tagId;

    public ProductTag(Integer id, Integer productId, Integer tagId) {
        this.id = id;
        this.productId = productId;
        this.tagId = tagId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getTagId() {
        return tagId;
    }

    public void setTagId(Integer tagId) {
        this.tagId = tagId;
    }
}
