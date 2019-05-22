package com.delta.InteractiveShoppingList.listContent;

import com.delta.InteractiveShoppingList.list.ShoppingListDAO;
import com.delta.InteractiveShoppingList.product.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Service
public class ListContentService {

    @Autowired
    ShoppingListDAO shoppingListDAO;
    @Autowired
    ListContentDAO listContentDAO;
    @Autowired
    ProductDAO productDAO;


    public ArrayList<ListContentShowDTO> getListOfContentsById(Long listId) {

        List<ListContent> listContents = listContentDAO.getListOfContentsById(listId);

        ArrayList<ListContentShowDTO> listContentShowDTOS = new ArrayList<>();

        for (ListContent listContent : listContents) {

            listContentShowDTOS.add(new ListContentShowDTO(
                    listId,
                    productDAO.getById(listContent.getProductId()).getName(),
                    listContent.getAddedBy(),
                    listContent.getAmount(),
                    listContent.getAmountUnit()));
        }

        return listContentShowDTOS;
    }

    public Long add(ListContentDTO listContentDTO) {

        return listContentDAO.add(new ListContent(listContentDTO.getListId(), listContentDTO.getProductId(), listContentDTO.getAddedBy(), listContentDTO.getAmount(), listContentDTO.getAmountUnit()));
    }
}
