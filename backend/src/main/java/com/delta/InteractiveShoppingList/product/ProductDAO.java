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


    public Long addProduct(Product product) {
        product.setVersionOrDefault();
        entityManager.persist(product);
        entityManager.flush();
        return product.getId();
    }


    public List getList() {
        return entityManager.createQuery("select p from Product p").getResultList();
    }

    public void updateProduct(Product product) {
        product.setVersion(product.getVersion() + 1);
        entityManager.merge(product);
    }

    public Product getById(Long productId) {
        return entityManager.find(Product.class, productId);
    }

    public void saveAll(List<Product> products) {
        for (Product product : products) {
            product.setVersionOrDefault();
            entityManager.persist(product);
        }
    }
}
