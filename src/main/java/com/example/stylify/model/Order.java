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
    @Basic
    @Column(name = "customer_id")
    private int customerId;
    @Basic
    @Column(name = "date")
    private Date date;
}
