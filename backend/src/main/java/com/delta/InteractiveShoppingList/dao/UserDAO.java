package com.delta.InteractiveShoppingList.dao;

import com.delta.InteractiveShoppingList.dto.UserDTO;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class UserDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public User getUserByUsername(String name) {
        return entityManager.find(User.class, name);
    }


    public boolean registerUser(User user) {
        if (entityManager.contains(user)) {
            return false;
        } else {
            entityManager.persist(user);
            return true;
        }
    }
}
