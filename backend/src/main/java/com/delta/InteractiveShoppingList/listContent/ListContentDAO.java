package com.delta.InteractiveShoppingList.listContent;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.util.List;

@Transactional
@Repository
public class ListContentDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public List<ListContent> getListOfContentsById(Long listId) {
        return entityManager.createQuery("Select l from ListContent l where l.listId like:listId").setParameter("listId", listId).getResultList();
    }

    public Long add(ListContent listContent) {
        listContent.setCreated(LocalDate.now());
        listContent.setVersionOrDefault();
        entityManager.persist(listContent);
        entityManager.flush();
        return listContent.getId();
    }
}
