package com.delta.InteractiveShoppingList.listContent;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ListContentDTO {

    Long listId;
    Long productId;
    Long addedBy;
    Float amount;
    String amountUnit;

    public ListContentDTO(Long listId, Long productId, Long addedBy, Float amount, String amountUnit) {
        this.listId = listId;
        this.productId = productId;
        this.addedBy = addedBy;
        this.amount = amount;
        this.amountUnit = amountUnit;
    }

    public ListContentDTO() {
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
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
}
