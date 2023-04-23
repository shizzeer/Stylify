package com.example.stylify.model;

import java.sql.Date;

public class Order {
    private final Integer orderId;
    private Integer customerId;
    private Date date;

    public Order(Integer orderId, Integer customerId, Date date) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.date = date;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
