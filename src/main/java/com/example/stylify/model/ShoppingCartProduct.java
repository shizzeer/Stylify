package com.example.stylify.model;

public class ShoppingCartProduct {
    private Integer id;
    private ShoppingCart shoppingCart;
    private Product product;
    private Integer quantity;

    public ShoppingCartProduct(Integer id, ShoppingCart shoppingCart, Product product, Integer quantity) {
        this.id = id;
        this.shoppingCart = shoppingCart;
        this.product = product;
        this.quantity = quantity;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
