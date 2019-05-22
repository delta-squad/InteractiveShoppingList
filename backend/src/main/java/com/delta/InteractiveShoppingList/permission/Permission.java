package com.delta.InteractiveShoppingList.permission;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "permission")
public class Permission {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "version")
    private Integer version;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "role_id")
    private Long roleId;

    @Column(name = "list_id")
    private Long listId;

    public Permission(Integer version, Long userId, Long roleId, Long listId) {
        this.version = version;
        this.userId = userId;
        this.roleId = roleId;
        this.listId = listId;
    }

    public Permission() {
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
    }
}
