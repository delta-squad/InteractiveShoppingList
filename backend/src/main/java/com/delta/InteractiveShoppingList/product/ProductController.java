package com.delta.InteractiveShoppingList.product;

import org.h2.tools.Csv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {

        this.productService = productService;
    }

    @GetMapping("/products")
    public List<ProductListDTO> getList() {
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

    @PostMapping(value = "/upload", consumes = "text/csv")
    public void addFile(@RequestBody InputStream body) throws IOException {
        //productService.saveAll(CsvUtils.read(ProductDTO.class, body));
    }

    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public void addMultipart(@RequestParam("file") MultipartFile file) throws IOException {
        //productService.saveAll(CsvUtils.read(ProductDTO.class, file.getInputStream()));
    }


}
