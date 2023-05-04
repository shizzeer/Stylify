package com.example.stylify.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Customers")
public class Customer {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "customer_id")
    private int customerId;

    @OneToOne(mappedBy = "customer")
    private User user;

    @OneToOne(mappedBy = "customer")
    private ShoppingCart shoppingCart;

    @OneToMany(mappedBy = "customer")
    private Set<Order> orders;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "street", nullable = false)
    private String street;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "zip_code", nullable = false)
    private String zipCode;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "balance", nullable = false)
    private double balance = 5000;
}
