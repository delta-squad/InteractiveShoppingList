package com.delta.InteractiveShoppingList.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class UserDAO {

    @PersistenceContext
    private EntityManager entityManager;

}
