package com.example.stylify.model;

import java.sql.Date;

public class ShoppingCart {
    private final Integer shoppingCartId;
    private Integer customerId;
    private Date dateCreated;
    private Double total;

    public ShoppingCart(Integer shoppingCartId, Integer customerId, Date dateCreated, Double total) {
        this.shoppingCartId = shoppingCartId;
        this.customerId = customerId;
        this.dateCreated = dateCreated;
        this.total = total;
    }

    public Integer getShoppingCartId() {
        return shoppingCartId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
