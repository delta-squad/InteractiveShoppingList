package com.delta.InteractiveShoppingList.dao;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name ="version", nullable = false)
    private int version;
    @Column(name = "login", length = 25, nullable = false)
    private String login;
    @Column(name = "password", length  = 25, nullable = false)
    private String password;
    @Column(name = "email", length = 50, nullable = false)
    private String email;
    @Column(name="created", nullable = false)
    private Date created;

    public User(String login, String password, String email){
        this.login = login;
        this.password = password;
        this.email = email;
    }

    public int getId(){
        return id;
    }

    public int getVersion(){
        return version;
    }

    public String getLogin(){
        return login;
    }

    public String getPassword(){
        return password;
    }

    public String getEmail(){
        return email;
    }

    public Date getCreated(){
        return created;
    }
}