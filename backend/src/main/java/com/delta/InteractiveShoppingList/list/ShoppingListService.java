package com.delta.InteractiveShoppingList.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class ShoppingListService {

    @Autowired
    ShoppingListDAO shoppingListDAO;

    public ArrayList<ShoppingListDTO> getListsByUserId(Long userId) {
        List<ShoppingList> shoppingLists = shoppingListDAO.getListsByUserId(userId);
        ArrayList<ShoppingListDTO> shoppingListDTOS = new ArrayList<>();
        for (ShoppingList shoppingList : shoppingLists) {
            shoppingListDTOS.add(new ShoppingListDTO
                    (shoppingList.getId(), shoppingList.getTitle(), shoppingList.getOwner()));
        }
        return shoppingListDTOS;
    }

    public Long add(ShoppingListDTO shoppingListDTO) {
        return shoppingListDAO.add(new ShoppingList(shoppingListDTO.getTitle(), shoppingListDTO.getOwner()));
    }
}
