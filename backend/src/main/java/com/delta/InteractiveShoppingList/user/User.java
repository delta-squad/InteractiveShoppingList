package com.delta.InteractiveShoppingList.user;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class User {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue
    private Long id;
    private String login;
    private String email;
    private String password;
    private Integer version;
    private Date created;

    public User() {

    }

    public User(String login, String email, String password, Integer version, Date created) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.version = version;
        this.created = created;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
