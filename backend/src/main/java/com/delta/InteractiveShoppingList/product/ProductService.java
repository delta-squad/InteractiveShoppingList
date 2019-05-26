package com.delta.InteractiveShoppingList.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Service
public class ProductService {


    @Autowired
    ProductDAO productDAO;

    public Long addProduct(ProductDTO productListDTO) {
        return productDAO.addProduct(new Product(productListDTO.getName()));
    }

    public void updateProduct(Long id, ProductListDTO productListDTO) {
        productDAO.updateProduct(new Product(id, productListDTO.getName()));
    }

    public List<ProductListDTO> getList() {

        List<Product> products = productDAO.getList();

        return products.stream().map(this::toListDto).collect(Collectors.toList());
    }

    public void saveAll(List<ProductDTO> read) {

        List<Product> products = new ArrayList<>();
        for (ProductDTO productDTO : read) {
            products.add(new Product(productDTO.getName()));
        }
        productDAO.saveAll(products);

    }

    private ProductListDTO toListDto(Product product) {

        return new ProductListDTO(
                product.getId(),
                product.getName()
        );
    }

}


