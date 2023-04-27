//package com.example.stylify.model;
//
//import jakarta.persistence.Basic;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "Products_to_Tags", schema = "public", catalog = "stylify_db")
//public class ProductToTag {
//    @Basic
//    @Column(name = "product_id")
//    private int productId;
//    @Basic
//    @Column(name = "tag_id")
//    private int tagId;
//
//    public int getProductId() {
//        return productId;
//    }
//
//    public void setProductId(int productId) {
//        this.productId = productId;
//    }
//
//    public int getTagId() {
//        return tagId;
//    }
//
//    public void setTagId(int tagId) {
//        this.tagId = tagId;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//
//        ProductToTag that = (ProductToTag) o;
//
//        if (productId != that.productId) return false;
//        if (tagId != that.tagId) return false;
//
//        return true;
//    }
//
//    @Override
//    public int hashCode() {
//        int result = productId;
//        result = 31 * result + tagId;
//        return result;
//    }
//}
