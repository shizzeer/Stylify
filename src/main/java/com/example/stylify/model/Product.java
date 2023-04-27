package com.example.stylify.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Products")
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "product_id")
    private int productId;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "image_url")
    private String imageUrl;
    @Basic
    @Column(name = "price")
    private double price;
    @Basic
    @Column(name = "customer_id")
    private int customerId;
    @Basic
    @Column(name = "category_id")
    private int categoryId;
}
