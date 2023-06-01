package com.example.stylify.repository;

import com.example.stylify.model.Customer;
import com.example.stylify.model.ShoppingCart;
import com.example.stylify.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Integer> {
    ShoppingCart findByCustomer(Customer authenticatedUserId);
}
