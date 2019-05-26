package com.delta.InteractiveShoppingList.list;

import com.delta.InteractiveShoppingList.user.User;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.Date;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ShoppingListDTO {

    Long id;
    String title;
    Long ownerId;

    public ShoppingListDTO() {
    }

    public ShoppingListDTO(Long id, String title) {
        this.id = id;
        this.title = title;
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

    public ShoppingListDTO(Long id, String title, Long ownerId) {
        this.id = id;
        this.title = title;
        this.ownerId = ownerId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }
}
