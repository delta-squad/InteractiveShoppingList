package com.delta.InteractiveShoppingList.list;


import com.delta.InteractiveShoppingList.permission.Permission;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Repository
public class ShoppingListDAO {

    @PersistenceContext
    private EntityManager entityManager;


    public List<ShoppingList> getListsByUserId(Long userId) {

        return entityManager
                .createQuery("select l from ShoppingList l join Permission p on l.id = p.list.id where p.user.id like :userId")
                .setParameter("userId", userId)
                .getResultList();
        /*
        return entityManager
                .createQuery("select p from Permission p where p.user.id like :userId")
                .setParameter("userId", userId)
                .getResultList();
*/

    }

    public Long add(ShoppingList shoppingList) {

        entityManager.persist(shoppingList);
        entityManager.flush();

        return shoppingList.getId();
    }

    public ShoppingList getById(Long listId) {
        return entityManager.find(ShoppingList.class, listId);
    }
}
