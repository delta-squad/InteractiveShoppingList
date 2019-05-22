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

    public Long addProduct(ProductDTO productListDTO) {
        return productDAO.addProduct(new Product(productListDTO.getName()));
    }

    public void updateProduct(Long id, ProductListDTO productListDTO) {
        productDAO.updateProduct(new Product(id, productListDTO.getName(), productListDTO.getVersion()));
    }

    public ArrayList<ProductListDTO> getList() {
        List<Product> products = productDAO.getList();
        ArrayList<ProductListDTO> productListDTOS = new ArrayList<>();
        for (Product product : products) {
            productListDTOS.add(new ProductListDTO(product.getId(), product.getName(), product.getVersion()));
        }
        return productListDTOS;
    }
}


