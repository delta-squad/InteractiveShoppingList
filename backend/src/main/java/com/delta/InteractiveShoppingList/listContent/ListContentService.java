package com.delta.InteractiveShoppingList.listContent;

import com.delta.InteractiveShoppingList.list.ShoppingListDAO;
import com.delta.InteractiveShoppingList.product.ProductDAO;
import com.delta.InteractiveShoppingList.user.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Service
public class ListContentService {

    private final ShoppingListDAO shoppingListDAO;
    private final ListContentDAO listContentDAO;
    private final ProductDAO productDAO;
    private final UserDAO userDAO;

    @Autowired
    public ListContentService(ShoppingListDAO shoppingListDAO, ListContentDAO listContentDAO, ProductDAO productDAO, UserDAO userDAO) {
        this.shoppingListDAO = shoppingListDAO;
        this.listContentDAO = listContentDAO;
        this.productDAO = productDAO;
        this.userDAO = userDAO;
    }


    List<ListContentShowDTO> getListOfContentsById(Long listId) {

        List<ListContent> listContents = listContentDAO.getListOfContentsById(listId);

        return listContents.stream().map(this::toListDto).collect(Collectors.toList());
    }

    Long add(ListContentDTO listContentDTO) {

        return listContentDAO.add(new ListContent(
                shoppingListDAO.getById(listContentDTO.getListId()),
                productDAO.getById(listContentDTO.getProductId()),
                userDAO.getUserById(listContentDTO.getAddedBy()),
                listContentDTO.getAmount(),
                listContentDTO.getAmountUnit()));
    }

    private ListContentShowDTO toListDto(ListContent listContent) {

        return new ListContentShowDTO(
                listContent.getList().getId(),
                listContent.getProduct().getName(),
                listContent.getAddedBy().getId(),
                listContent.getAmount(),
                listContent.getAmountUnit());
    }
}
