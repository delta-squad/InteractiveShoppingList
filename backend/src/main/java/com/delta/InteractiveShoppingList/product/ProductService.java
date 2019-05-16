package com.delta.InteractiveShoppingList.product;

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

    public Long addProduct(ProductDTO productDTO) {
        return productDAO.addProduct(new Product(productDTO.getName()));
    }

    public void updateProduct(Long id, ProductDTO productDTO) {
        productDAO.updateProduct(new Product(id, productDTO.getName(), productDTO.getVersion()));
    }

    public ArrayList<ProductDTO> getList() {
        List<Product> products = productDAO.getList();
        ArrayList<ProductDTO> productDTOS = new ArrayList<>();
        for (Product product : products) {
            productDTOS.add(new ProductDTO(product.getId(), product.getName(), product.getVersion()));
        }
        return productDTOS;
    }
}


