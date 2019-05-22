package com.delta.InteractiveShoppingList.list;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
@Repository
public class ShoppingListDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public List<ShoppingList> getListsByUserId(Long userId) {
        return entityManager.createQuery("Select l from ShoppingList l where l.owner like :id").setParameter("id", userId).getResultList();
    }

    public Long add(ShoppingList shoppingList) {
        entityManager.persist(shoppingList);
        entityManager.flush();
        return shoppingList.getId();
    }
}
