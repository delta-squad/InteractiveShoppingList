package com.delta.InteractiveShoppingList.listContent;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ListContentDTO {

    String listId;
    String productId;
    String addedBy;
    String amount;
    String amountUnit;

    public ListContentDTO() {
    }

    public ListContentDTO(String listId, String productId, String addedBy, String amount, String amountUnit) {
        this.listId = listId;
        this.productId = productId;
        this.addedBy = addedBy;
        this.amount = amount;
        this.amountUnit = amountUnit;
    }

    public String getListId() {
        return listId;
    }

    public void setListId(String listId) {
        this.listId = listId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getAddedBy() {
        return addedBy;
    }

    public void setAddedBy(String addedBy) {
        this.addedBy = addedBy;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getAmountUnit() {
        return amountUnit;
    }

    public void setAmountUnit(String amountUnit) {
        this.amountUnit = amountUnit;
    }
}
