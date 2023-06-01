package com.example.stylify.service;

import com.example.stylify.dto.CustomerDTO;
import com.example.stylify.model.Customer;
import com.example.stylify.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    public Optional<Customer> findCustomerById(Integer id) {
        return customerRepository.findById(id);
    }

    public Customer getCustomerFromCustomerDTO(CustomerDTO customerDTO) {
        Customer customer = new Customer();
        customer.setFirstName(customerDTO.getFirstName());
        customer.setLastName(customerDTO.getLastName());
        customer.setCity(customerDTO.getCity());
        customer.setCountry(customerDTO.getCountry());
        customer.setPhoneNumber(customerDTO.getPhoneNumber());
        customer.setStreet(customerDTO.getStreet());
        customer.setZipCode(customerDTO.getZipCode());

        return customer;
    }

    public void updateCustomerData(Customer customer) {
        customerRepository.save(customer);
    }
}
