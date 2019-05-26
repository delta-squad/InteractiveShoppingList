package com.delta.InteractiveShoppingList.product;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Integer version;
    @ManyToOne
    private Product parent;
    private Boolean isCategory;

    public Product() {
    }

    Product(String name) {

        this.name = name;
        this.version = 1;
        this.parent = null;
        this.isCategory = false;

    }

    Product(Long id, String name) {

        this.id = id;
        this.name = name;
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

    public Product getParent() {
        return parent;
    }

    public void setParent(Product parent) {
        this.parent = parent;
    }

    public Boolean getCategory() {
        return isCategory;
    }

    public void setCategory(Boolean category) {
        isCategory = category;
    }

    void setVersionOrDefault() {
        if (version != null) {
            version = version++;
        } else {
            version = 1;
        }
    }
}
