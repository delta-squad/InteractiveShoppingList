package com.delta.InteractiveShoppingList.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public ArrayList<ProductListDTO> getList() {
        return productService.getList();
    }

    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public Long add(@RequestBody ProductDTO productDTO) {
        return productService.addProduct(productDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable Long id, @RequestBody ProductListDTO productListDTO) {
        productService.updateProduct(id, productListDTO);
    }


}
