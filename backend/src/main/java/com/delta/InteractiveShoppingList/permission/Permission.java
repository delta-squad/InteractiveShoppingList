package com.delta.InteractiveShoppingList.permission;

import com.delta.InteractiveShoppingList.list.ShoppingList;
import com.delta.InteractiveShoppingList.role.Role;
import com.delta.InteractiveShoppingList.user.User;

import javax.persistence.*;

@Entity
@Table(name = "permission")
public class Permission {

    @Id
    @GeneratedValue
    private Long id;
    private Integer version;
    @ManyToOne
    private User user;
    @ManyToOne
    private Role role;
    @ManyToOne
    private ShoppingList list;

    public Permission(User user, ShoppingList list) {
        this.version = 1;
        this.role = new Role((long) 1, "OWNER");
        this.user = user;
        this.list = list;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public ShoppingList getList() {
        return list;
    }

    public void setList(ShoppingList list) {
        this.list = list;
    }
}
