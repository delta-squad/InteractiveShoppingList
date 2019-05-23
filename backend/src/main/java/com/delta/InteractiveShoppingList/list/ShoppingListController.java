package com.delta.InteractiveShoppingList.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class ShoppingListController {

    @Autowired
    ShoppingListService shoppingListService;

    @GetMapping("/{userId}/lists")
    public ArrayList<ShoppingListDTO> getListsByUserId(@PathVariable Long userId) {
        return shoppingListService.getListsByUserId(userId);
    }

    @PostMapping("/list")
    public Long add(@RequestBody ShoppingListDTO shoppingListDTO) {
        return shoppingListService.add(shoppingListDTO);
    }



}
