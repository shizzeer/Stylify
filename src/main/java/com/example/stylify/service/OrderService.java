package com.example.stylify.service;

import com.example.stylify.dto.CustomerDTO;
import com.example.stylify.dto.OrderDTO;
import com.example.stylify.model.Customer;
import com.example.stylify.model.DefaultResponse;
import com.example.stylify.model.Order;
import com.example.stylify.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;

@Service
public class OrderService {

    @Autowired
    private CustomerService customerService;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserService userService;

    public ResponseEntity<DefaultResponse> place(
            OrderDTO orderDTO
    ) {
        Order order = new Order();
        order.setDate(Date.valueOf(LocalDate.now()));

        CustomerDTO customerDTO = orderDTO.getCustomer();
        int authenticatedCustomerId = userService.getAuthenticatedUser().getUserId();
        Customer customer = customerService.getCustomerFromCustomerDTO(customerDTO);
        customer.setCustomerId(authenticatedCustomerId);

        customerService.updateCustomerData(customer);
        order.setCustomer(customer);
        orderRepository.save(order);

        DefaultResponse defaultResponse = new DefaultResponse();
        defaultResponse.setMessage("An order has been placed");
        return ResponseEntity.status(HttpStatus.OK).body(defaultResponse);
    }
}
