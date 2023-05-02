package com.example.stylify.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "Shopping_Cart")
public class ShoppingCart {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "shopping_cart_id")
    private int shoppingCartId;

    @OneToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "shoppingCart")
    private Set<Product> products;

    @Column(name = "date_created", nullable = false)
    private Date dateCreated;

    @Column(name = "total", nullable = false)
    private double total;
}
