package com.delta.InteractiveShoppingList.listContent;

import com.delta.InteractiveShoppingList.user.User;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ListContentShowDTO {

    Long listId;
    String productName;
    Long addedBy;
    Float amount;
    String amountUnit;

    public ListContentShowDTO() {
    }

    public ListContentShowDTO(Long listId, String productName, Long addedBy, Float amount, String amountUnit) {
        this.listId = listId;
        this.productName = productName;
        this.addedBy = addedBy;
        this.amount = amount;
        this.amountUnit = amountUnit;
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
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
