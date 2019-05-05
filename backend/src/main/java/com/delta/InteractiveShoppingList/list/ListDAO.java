package com.delta.InteractiveShoppingList.list;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class ListDAO {

    @PersistenceContext
    private EntityManager entityManager;

}
