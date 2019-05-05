package com.delta.InteractiveShoppingList.permission;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class PermissionDAO {

    @PersistenceContext
    private EntityManager entityManager;

}
