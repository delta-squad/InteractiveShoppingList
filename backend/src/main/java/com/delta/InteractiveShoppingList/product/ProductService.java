package com.delta.InteractiveShoppingList.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class ProductService {


    @Autowired
    ProductDAO productDAO;

    public void addProduct(ProductDTO productDTO) {
    }

    public void updateProduct(Long id, ProductDTO productDTO) {
    }

    public List<ProductDTO> getProducts() {
        return null;
    }
}


