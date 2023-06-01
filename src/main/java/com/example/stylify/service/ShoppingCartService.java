package com.example.stylify.service;

import com.example.stylify.dto.CartDTO;
import com.example.stylify.dto.ProductDTO;
import com.example.stylify.model.*;
import com.example.stylify.repository.ShoppingCartRepository;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class ShoppingCartService {

    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ShoppingCartRepository shoppingCartRepository;


    private ShoppingCart create() {
        Integer authenticatedUserId = userService.getAuthenticatedUser().getUserId();
        Optional<Customer> authenticatedCustomer = customerService.findCustomerById(authenticatedUserId);
        if (authenticatedCustomer.isEmpty()) {
            return null;
        }
        ShoppingCart existingCart = shoppingCartRepository.findByCustomer(authenticatedCustomer.get());
        if (existingCart == null) {
            return new ShoppingCart(authenticatedCustomer.get());
        }
        return existingCart;
    }

    private void updateTotalPrice(ShoppingCart cart) {
        Set<Product> products = cart.getProducts();
        double total = 0;
        for (Product product : products) {
            total += product.getPrice();
        }
        cart.setTotal(total);
    }

    public ResponseEntity<DefaultResponse> add(ProductDTO productDTO) {
        DefaultResponse defaultResponse = new DefaultResponse();
        // 1. Stworz koszyk jezeli jeszcze nie istnieje
        ShoppingCart shoppingCart = create();
        if (shoppingCart == null) {
            defaultResponse.setError("Customer does not exist");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
        }
        // 2. Koszyk w tym momencie istnieje wiec mozemy dodac do niego produkty
        Product product = productService.getProductFromProductDTO(productDTO);
        if (product == null) {
            defaultResponse.setError("Seller does not exist");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(defaultResponse);
        }
        shoppingCart.addProduct(product);
        updateTotalPrice(shoppingCart);
        product.setShoppingCart(shoppingCart);
        shoppingCartRepository.save(shoppingCart);
        productService.save(product); // zaznaczenie w bazie danych ze produkt jest dodany do koszyka
        defaultResponse.setMessage("Product added successfully");
        return ResponseEntity.status(HttpStatus.OK).body(defaultResponse);
    }

    /*private Set<ProductDTO> sortProductsInCart(Set<ProductDTO> productsDTO) {
        List<ProductDTO> productsDTOList = new ArrayList<>(productsDTO);
        productsDTOList.sort(Comparator.comparingDouble(ProductDTO::getPrice));
        return new TreeSet<>(productsDTOList);
    }*/

    public ResponseEntity<CartDTO> get() {
        // 1. Pobierz id uwierzytelnionego usera
        Integer authenticatedUserId = userService.getAuthenticatedUser().getUserId();
        // 2. Znajdz klienta o tym id
        Optional<Customer> customer = customerService.findCustomerById(authenticatedUserId);
        Customer authenticatedCustomer = customer.get();
        // 3. Wez wszystkie produkty z koszyka o id uwierzytelnionego usera
        ShoppingCart customerCart = shoppingCartRepository.findByCustomer(authenticatedCustomer);
        if (customerCart == null) {
            return ResponseEntity.status(HttpStatus.OK).body(new CartDTO());
        }
        CartDTO cartDTO = new CartDTO();
        Set<ProductDTO> productsDTO = productService.getProductDTOS(customerCart.getProducts());
        cartDTO.setProducts(productsDTO);
        cartDTO.setTotal(customerCart.getTotal());
        return ResponseEntity.status(HttpStatus.OK).body(cartDTO);
    }
}
