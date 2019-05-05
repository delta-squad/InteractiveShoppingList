package com.delta.InteractiveShoppingList.role;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class RoleDAO {

    @PersistenceContext
    private EntityManager entityManager;

}
