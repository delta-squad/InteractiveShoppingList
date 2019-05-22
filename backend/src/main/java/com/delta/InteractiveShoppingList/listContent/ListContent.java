package com.delta.InteractiveShoppingList.listContent;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "list_content")
public class ListContent {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "list_id")
    private Long listId;

    @Column(name = "version")
    private Integer version;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "added_by")
    private Long addedBy;
    @Column(name = "amount")
    private Float amount;

    @Column(name = "amount_unit")
    private String amountUnit;

    @Column(name = "time_of_addition")
    private LocalDate created;

    public ListContent(Long listId, Long productId, Long addedBy, Float amount, String amountUnit) {

        this.listId = listId;
        this.productId = productId;
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

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(Long addedBy) {
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

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
    }

    public void setVersionOrDefault() {
        if (version != null) {
            version = version++;
        } else {
            version = 1;
        }
    }

    public ListContent() {
    }
}
