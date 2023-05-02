package com.example.stylify.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Tags")
public class Tag {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "tag_id")
    private int tagId;

    @ManyToMany(mappedBy = "tags")
    private Set<Product> products = new HashSet<>();

    @Column(name = "name", nullable = false)
    private String name;
}
