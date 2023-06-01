package com.example.stylify.model;

import com.example.stylify.dto.ProductDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Shopping_Cart")

public class ShoppingCart {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "shopping_cart_id")
    private int shoppingCartId;

    @OneToOne
    @JoinColumn(unique = true, name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "shoppingCart")
    private Set<Product> products;

    @Column(name = "date_created", nullable = false)
    private Date dateCreated;

    @Column(name = "total", nullable = false)
    private double total;

    public ShoppingCart(Customer customer) {
        this.customer = customer;
        this.products = new HashSet<>();
        this.dateCreated = Date.valueOf(LocalDate.now());
        this.total = 0;
    }

    public void addProduct(Product product) {
        products.add(product);
    }

    public Set<Product> getProducts() {
        return this.products;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
