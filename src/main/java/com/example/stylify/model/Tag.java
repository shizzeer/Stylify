package com.example.stylify.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Tags")
public class Tag {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "tag_id")
    private int tagId;
    @Basic
    @Column(name = "name")
    private String name;
}
