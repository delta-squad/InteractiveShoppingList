package com.delta.InteractiveShoppingList.listContent;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class ListContentDAO {

    @PersistenceContext
    private EntityManager entityManager;

}
