package com.delta.InteractiveShoppingList.permission;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class PermissionDTO {

    Long listId;
    Long userId;

    public PermissionDTO(Long listId, Long userId) {
        this.listId = listId;
        this.userId = userId;
    }

    public PermissionDTO() {
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
