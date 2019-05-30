package com.delta.InteractiveShoppingList.role;

import javax.persistence.*;

@Entity
@Table(name = "list")
public class Role {

    @Id
    @GeneratedValue
    private Long id;
    private String status;

    public Role(Long id, String status) {
        this.id = id;
        this.status = status;
    }
}
