package com.delta.InteractiveShoppingList.list;

import com.delta.InteractiveShoppingList.permission.Permission;
import com.delta.InteractiveShoppingList.permission.PermissionDAO;
import com.delta.InteractiveShoppingList.permission.PermissionDTO;
import com.delta.InteractiveShoppingList.user.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Component
@Service
public class ShoppingListService {

    private final ShoppingListDAO shoppingListDAO;
    private final UserDAO userDAO;
    private final PermissionDAO permissionDAO;

    @Autowired
    public ShoppingListService(ShoppingListDAO shoppingListDAO, UserDAO userDAO, PermissionDAO permissionDAO) {
        this.shoppingListDAO = shoppingListDAO;
        this.userDAO = userDAO;
        this.permissionDAO = permissionDAO;
    }


    List<ShoppingListDTO> getListsByUserId(Long userId) {

        return shoppingListDAO.getListsByUserId(userId)
                .stream()
                .map(this::toListDto)
                .collect(Collectors.toList());
    }

    Long add(ShoppingListDTO shoppingListDTO) {

        Long newListId = shoppingListDAO.add(new ShoppingList(
                shoppingListDTO.getTitle()));

        return permissionDAO.add(new Permission(
                userDAO.getUserById(shoppingListDTO.getOwnerId()),
                shoppingListDAO.getById(newListId)));
    }

    private ShoppingListDTO toListDto(ShoppingList shoppingList) {

        return new ShoppingListDTO(
                shoppingList.getId(),
                shoppingList.getTitle());
    }

    void addUserToList(PermissionDTO permissionDto) {
        permissionDAO.add(new Permission(
                userDAO.getUserById(permissionDto.getUserId()),
                shoppingListDAO.getById(permissionDto.getListId())));
    }
}
