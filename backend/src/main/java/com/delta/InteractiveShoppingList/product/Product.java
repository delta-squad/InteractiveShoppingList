package com.delta.InteractiveShoppingList.product;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "version")
    private Integer version;

    @Column(name = "parent")
    private Product product;

    @Column(name = "is_category")
    private Boolean isCategory;

    public Product() {
    }

    public Product(String name, Integer version, Product product, Boolean isCategory) {
        this.name = name;
        this.version = version;
        this.product = product;
        this.isCategory = isCategory;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Boolean getCategory() {
        return isCategory;
    }

    public void setCategory(Boolean category) {
        isCategory = category;
    }
}
