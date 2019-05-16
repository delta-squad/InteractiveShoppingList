package com.delta.InteractiveShoppingList.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public ArrayList<ProductDTO> getList() {
        return productService.getList();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Long add(@RequestBody ProductDTO productDTO) {
        return productService.addProduct(productDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable Long id, @RequestBody ProductDTO productDTO) {
        productService.updateProduct(id, productDTO);
    }


}
