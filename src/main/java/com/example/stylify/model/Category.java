package com.example.stylify.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Categories")
public class Category {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "category_id")
    private int customerId;

    @Basic
    @Column(name = "name")
    private String name;
}
