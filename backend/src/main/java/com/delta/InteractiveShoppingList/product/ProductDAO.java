package com.delta.InteractiveShoppingList.product;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
@Repository
public class ProductDAO {

    @PersistenceContext
    private EntityManager entityManager;


    public void addProduct(Product product) {
        entityManager.persist(product);
    }


    public List<Product> getProducts() {
        return entityManager.createQuery("select * from product").getResultList();
    }

    public void updateProduct(Product product) {
      entityManager.merge(product);
    }
}
