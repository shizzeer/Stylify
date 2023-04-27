package com.example.stylify.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Customers", schema = "public", catalog = "stylify_db")
public class Customer {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "customer_id")
    private int customerId;
    @Basic
    @Column(name = "first_name")
    private String firstName;
    @Basic
    @Column(name = "last_name")
    private String lastName;
    @Basic
    @Column(name = "country")
    private String country;
    @Basic
    @Column(name = "street")
    private String street;
    @Basic
    @Column(name = "city")
    private String city;
    @Basic
    @Column(name = "zip_code")
    private String zipCode;
    @Basic
    @Column(name = "phone_number")
    private String phoneNumber;
    @Basic
    @Column(name = "balance")
    private double balance;
}
