package com.example.stylify.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Orders")
public class Order {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "order_id")
    private int orderId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    public Customer customer;

    @Column(name = "date", nullable = false)
    private Date date;
}
