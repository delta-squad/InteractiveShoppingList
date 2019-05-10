package com.delta.InteractiveShoppingList.list;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.Date;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ShoppingListDTO {

    Long id;
    String title;
    Long owner;
    String created;
    String lastEdited;


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

    public ShoppingListDTO(Long id, String title, Long owner, String created, String lastEdited) {
        this.id = id;
        this.title = title;
        this.owner = owner;
        this.created = created;
        this.lastEdited = lastEdited;
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

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public String getLastEdited() {
        return lastEdited;
    }

    public void setLastEdited(String lastEdited) {
        this.lastEdited = lastEdited;
    }
}
