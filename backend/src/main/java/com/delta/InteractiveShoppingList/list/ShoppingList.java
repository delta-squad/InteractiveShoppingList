package com.delta.InteractiveShoppingList.list;

import com.delta.InteractiveShoppingList.user.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "list")
public class ShoppingList {

    @Id
    @GeneratedValue
    private Long id;
    private Integer version;
    private String title;
    private Date created;
    private Date lastEdition;

    public ShoppingList(Integer version, String title, Date created, Date lastEdition) {
        this.version = version;
        this.title = title;
        this.created = created;
        this.lastEdition = lastEdition;
    }

    public ShoppingList(String title) {
        this.title = title;
        this.version = 1;
        this.created = new Date();
        this.lastEdition= new Date();
    }

    public ShoppingList() {
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getLastEdition() {
        return lastEdition;
    }

    public void setLastEdition(Date lastEdition) {
        this.lastEdition = lastEdition;
    }
}
