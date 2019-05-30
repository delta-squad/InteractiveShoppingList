package com.delta.InteractiveShoppingList.list;

import com.delta.InteractiveShoppingList.permission.PermissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class ShoppingListController {

    private final ShoppingListService shoppingListService;

    @Autowired
    public ShoppingListController(ShoppingListService shoppingListService) {
        this.shoppingListService = shoppingListService;
    }

    @GetMapping("/{userId}/lists")
    public List<ShoppingListDTO> getListsByUserId(@PathVariable Long userId) {

        return shoppingListService.getListsByUserId(userId);
    }

    @PostMapping("/list")
    public Long add(@RequestBody ShoppingListDTO shoppingListDTO) {

        return shoppingListService.add(shoppingListDTO);
    }

    @PostMapping("/list/addUser")
    public void addUserToList(@RequestBody PermissionDTO permissionDto) {
        shoppingListService.addUserToList(permissionDto);
    }


}
