package com.delta.InteractiveShoppingList.role;

import javax.persistence.*;

@Entity
@Table(name = "list")
public class Role {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "status")
    private String status;

}
