package com.delta.InteractiveShoppingList.list;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "list")
public class ShoppingList {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "version")
    private Integer version;

    @Column(name = "title")
    private String title;

    @Column(name = "owner")
    private Long owner;

    @Column(name = "created")
    private Date created;

    @Column(name = "last_edition")
    private Date lastEdition;

    public ShoppingList(Integer version, String title, Long owner, Date created, Date lastEdition) {
        this.version = version;
        this.title = title;
        this.owner = owner;
        this.created = created;
        this.lastEdition = lastEdition;
    }

    public ShoppingList() {
    }

    public ShoppingList(String title, Long owner) {
        this.title = title;
        this.owner = owner;
        this.version = 1;
        this.created = new Date();
        this.lastEdition = new Date();
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

    public Long getOwner() {
        return owner;
    }

    public void setOwner(Long owner) {
        this.owner = owner;
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
