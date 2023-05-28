package com.example.stylify.service;

import com.example.stylify.dto.ProductDTO;
import com.example.stylify.model.Product;
import com.example.stylify.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserService userService;
    private final ModelMapper modelMapper = new ModelMapper();

    private final PropertyMap<Product, ProductDTO> productMap = new PropertyMap<>() {
        protected void configure() {
            using(ctx -> Base64.getEncoder().encodeToString(((Product) ctx.getSource()).getImage()))
                    .map(source, destination.getImage());
        }
    };

    public ProductService() {
        modelMapper.addMappings(productMap);
    }

    private List<ProductDTO> getProductDTOS(List<Product> products) {
        TypeToken<List<ProductDTO>> typeToken = new TypeToken<List<ProductDTO>>() {};
        List<ProductDTO> productsDTO = modelMapper.map(products, typeToken.getType());
        for (int i = 0; i < productsDTO.size(); i++) {
            productsDTO.get(i).setProductId(products.get(i).getProductId());
            productsDTO.get(i).setSellerUsername(products.get(i).getUser().getActualUsername());
        }
        return productsDTO;
    }

    public List<ProductDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return getProductDTOS(products);
    }

    public List<ProductDTO> getProductsByCategory(String category) {
        System.out.println(category);
        List<Product> products = productRepository.findByCategoryIgnoreCase(category);
        return getProductDTOS(products);
    }

    public void sell(Product product) {
        save(product);
    }

    public void save(Product product) {
        productRepository.save(product);
    }
}
