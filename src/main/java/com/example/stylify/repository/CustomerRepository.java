package com.example.stylify.repository;

import com.example.stylify.model.Customer;
import com.example.stylify.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
