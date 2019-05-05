package com.delta.InteractiveShoppingList.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void addProduct(@RequestBody ProductDTO productDTO) {
        productService.addProduct(productDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void updateProduct(@PathVariable Long id,@RequestBody ProductDTO productDTO) {
        productService.updateProduct(id, productDTO);
    }

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public List<ProductDTO> getProducts() {
        return productService.getProducts();
    }





}
