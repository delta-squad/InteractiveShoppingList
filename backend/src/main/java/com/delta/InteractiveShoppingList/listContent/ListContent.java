package com.delta.InteractiveShoppingList.listContent;

import com.delta.InteractiveShoppingList.list.ShoppingList;
import com.delta.InteractiveShoppingList.product.Product;
import com.delta.InteractiveShoppingList.user.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "list_content")
public class ListContent {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private ShoppingList list;
    private Integer version;
    @ManyToOne
    private Product product;
    @ManyToOne
    private User addedBy;
    private Float amount;
    private String amountUnit;
    private LocalDate created;

    public ListContent(ShoppingList list, Integer version, Product product, User addedBy, Float amount, String amountUnit, LocalDate created) {
        this.list = list;
        this.version = version;
        this.product = product;
        this.addedBy = addedBy;
        this.amount = amount;
        this.amountUnit = amountUnit;
        this.created = created;
    }

    public ListContent(ShoppingList list, Product product, User addedBy, Float amount, String amountUnit) {
        this.list = list;
        this.version = 1;
        this.product = product;
        this.addedBy = addedBy;
        this.amount = amount;
        this.amountUnit = amountUnit;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ShoppingList getList() {
        return list;
    }

    public void setList(ShoppingList list) {
        this.list = list;
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

    public User getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(User addedBy) {
        this.addedBy = addedBy;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    public String getAmountUnit() {
        return amountUnit;
    }

    public void setAmountUnit(String amountUnit) {
        this.amountUnit = amountUnit;
    }

    public LocalDate getCreated() {
        return created;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public void setVersionOrDefault() {
        if (version != null) {
            version = version++;
        } else {
            version = 1;
        }
    }
}

