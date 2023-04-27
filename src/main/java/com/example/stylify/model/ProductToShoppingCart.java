//package com.example.stylify.model;
//
//import jakarta.persistence.Basic;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "Products_to_Shopping_Cart", schema = "public", catalog = "stylify_db")
//public class ProductToShoppingCart {
//    @Basic
//    @Column(name = "product_id")
//    private int productId;
//    @Basic
//    @Column(name = "shopping_cart_id")
//    private int shoppingCartId;
//    @Basic
//    @Column(name = "product_quantity")
//    private int productQuantity;
//
//    public int getProductId() {
//        return productId;
//    }
//
//    public void setProductId(int productId) {
//        this.productId = productId;
//    }
//
//    public int getShoppingCartId() {
//        return shoppingCartId;
//    }
//
//    public void setShoppingCartId(int shoppingCartId) {
//        this.shoppingCartId = shoppingCartId;
//    }
//
//    public int getProductQuantity() {
//        return productQuantity;
//    }
//
//    public void setProductQuantity(int productQuantity) {
//        this.productQuantity = productQuantity;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//
//        ProductToShoppingCart that = (ProductToShoppingCart) o;
//
//        if (productId != that.productId) return false;
//        if (shoppingCartId != that.shoppingCartId) return false;
//        if (productQuantity != that.productQuantity) return false;
//
//        return true;
//    }
//
//    @Override
//    public int hashCode() {
//        int result = productId;
//        result = 31 * result + shoppingCartId;
//        result = 31 * result + productQuantity;
//        return result;
//    }
//}
