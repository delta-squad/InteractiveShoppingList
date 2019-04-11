package com.delta.InteractiveShoppingList.service;

import com.delta.InteractiveShoppingList.dao.Product;
import com.delta.InteractiveShoppingList.dao.ProductDAO;
import com.delta.InteractiveShoppingList.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class ProductService {


    @Autowired
    ProductDAO productDAO;


    public void addProduct(ProductDTO productDTO) {
        productDAO.addProduct(new Product(productDTO.getName(), productDTO.getPrice()));
    }

    public void updateProduct(Long id, ProductDTO productDTO) {
        productDAO.updateProduct(new Product(id, productDTO.getName(), productDTO.getPrice()));
    }

    public List<ProductDTO> getProducts() {
        List<Product> products = productDAO.getProducts();
        List<ProductDTO> productsDTO = null;
        for(Product product: products){
            productsDTO.add(new ProductDTO(product.getName(), product.getPrice()));
        }
        return productsDTO;
    }
}


