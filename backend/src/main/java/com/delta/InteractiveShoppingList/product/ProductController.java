package com.delta.InteractiveShoppingList.product;

import org.h2.tools.Csv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
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

    @PostMapping(value = "/upload", consumes = "text/csv")
    public void addFile(@RequestBody InputStream body) throws IOException {
        //productService.saveAll(CsvUtils.read(ProductDTO.class, body));
    }

    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public void addMultipart(@RequestParam("file") MultipartFile file) throws IOException {
        //productService.saveAll(CsvUtils.read(ProductDTO.class, file.getInputStream()));
    }


}
