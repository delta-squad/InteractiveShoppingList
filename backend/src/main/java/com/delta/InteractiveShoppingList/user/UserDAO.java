package com.delta.InteractiveShoppingList.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class UserDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public User getUserByLogin(String name) {
        User user = (User) entityManager.createQuery("Select u from User u where u.login like :name").setParameter("name", name).getSingleResult();
        return user;
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
