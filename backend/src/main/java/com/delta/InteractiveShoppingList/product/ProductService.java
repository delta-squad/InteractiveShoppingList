package com.delta.InteractiveShoppingList.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class ProductService {


    @Autowired
    ProductDAO productDAO;

}


