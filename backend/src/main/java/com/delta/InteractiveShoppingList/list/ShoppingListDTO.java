package com.delta.InteractiveShoppingList.list;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.Date;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ShoppingListDTO {

    Long id;
    String title;
    Long owner;

    public ShoppingListDTO() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public ShoppingListDTO(Long id, String title, Long owner) {
        this.id = id;
        this.title = title;
        this.owner = owner;
    }

    public Long getOwner() {

        return owner;
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }

    public void setId(Long id) {
        this.id = id;

    }
}
