package com.example.stylify.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Shopping_Cart")
public class ShoppingCart {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "shopping_cart_id")
    private int shoppingCartId;
    @Basic
    @Column(name = "customer_id")
    private int customerId;
    @Basic
    @Column(name = "date_created")
    private Date dateCreated;
    @Basic
    @Column(name = "total")
    private double total;
}
