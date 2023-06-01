package com.example.stylify.controller;

import com.example.stylify.dto.OrderDTO;
import com.example.stylify.dto.ProductDTO;
import com.example.stylify.model.DefaultResponse;
import com.example.stylify.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<DefaultResponse> place(
            @RequestBody OrderDTO orderDTO
    ) {
        return orderService.place(orderDTO);
    }
}
