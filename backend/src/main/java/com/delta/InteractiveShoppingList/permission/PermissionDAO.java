package com.delta.InteractiveShoppingList.permission;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Repository
public class PermissionDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public Long add(Permission permission) {

        entityManager.persist(permission);
        entityManager.flush();
        return permission.getId();
    }
}