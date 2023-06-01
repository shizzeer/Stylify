package com.example.stylify.service;

import com.example.stylify.dto.ProductDTO;
import com.example.stylify.model.Product;
import com.example.stylify.model.User;
import com.example.stylify.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<ProductDTO> getProductDTOS(List<Product> products) {
        TypeToken<List<ProductDTO>> typeToken = new TypeToken<List<ProductDTO>>() {};
        List<ProductDTO> productsDTO = modelMapper.map(products, typeToken.getType());
        for (int i = 0; i < productsDTO.size(); i++) {
            productsDTO.get(i).setProductId(products.get(i).getProductId());
            productsDTO.get(i).setSellerUsername(products.get(i).getUser().getActualUsername());
        }
        return productsDTO;
    }

    public Set<ProductDTO> getProductDTOS(Set<Product> products) {
        TypeToken<Set<ProductDTO>> typeToken = new TypeToken<Set<ProductDTO>>() {};
        Set<ProductDTO> productsDTO = modelMapper.map(products, typeToken.getType());
        Iterator<ProductDTO> iterator = productsDTO.iterator();
        Iterator<Product> productIterator = products.iterator();

        while (iterator.hasNext() && productIterator.hasNext()) {
            ProductDTO productDTO = iterator.next();
            Product product = productIterator.next();

            productDTO.setProductId(product.getProductId());
            productDTO.setSellerUsername(product.getUser().getActualUsername());
        }
        return productsDTO;
    }

    private ProductDTO getProductDTO(Product product) {
        ProductDTO productDTO = modelMapper.map(product, ProductDTO.class);
        productDTO.setProductId(product.getProductId());
        productDTO.setSellerUsername(product.getUser().getActualUsername());
        return productDTO;
    }

    public Product getProductFromProductDTO(ProductDTO productDTO) {
        Product product = new Product();
        String sellerUsername = productDTO.getSellerUsername();
        Optional<User> seller = userService.findByUsername(sellerUsername);
        if (seller.isEmpty()) {
            return null;
        }
        String base64Image = productDTO.getBase64Image();

        product.setName(productDTO.getName());
        product.setCategory(productDTO.getCategory());
        product.setPrice(productDTO.getPrice());
        product.setCondition(productDTO.getCondition());
        product.setDescription(productDTO.getDescription());
        product.setSize(productDTO.getSize());
        product.setImage(Base64.getDecoder().decode(base64Image));
        product.setUser(seller.get());
        product.setProductId(productDTO.getProductId());

        return product;
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

    public ProductDTO getProductById(Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        Product product = optionalProduct.orElseThrow(() ->
                new NullPointerException("Product not found"));
        return getProductDTO(product);
    }

    public void sell(Product product) {
        save(product);
    }

    public void save(Product product) {
        productRepository.save(product);
    }
}
