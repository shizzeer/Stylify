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

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "country")
    private String country;

    @Column(name = "street")
    private String street;

    @Column(name = "city")
    private String city;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "balance")
    private double balance = 5000;

    public Customer(int customerId) {
        this.customerId = customerId;
    }

    public Customer() {

    }
}
