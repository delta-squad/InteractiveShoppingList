package com.delta.InteractiveShoppingList.list;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ListDTO {

    String title;
    String owner;
    String created;
    String lastEdited;

    public ListDTO(String title, String owner, String created, String lastEdited) {
        this.title = title;
        this.owner = owner;
        this.created = created;
        this.lastEdited = lastEdited;
    }

    public ListDTO() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
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
