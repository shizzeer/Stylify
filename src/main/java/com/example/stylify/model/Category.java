package com.example.stylify.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Categories")
public class Category {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "category_id")
    private int categoryId;

    @OneToMany(mappedBy = "category")
    private Set<Product> products;

    @Basic
    @Column(name = "name", nullable = false)
    private String name;
}
