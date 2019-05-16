package com.delta.InteractiveShoppingList.listContent;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "list_content")
public class ListContent {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "version")
    private Integer version;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "added_by")
    private Long addedBy;


    @Column(name = "aomunt")
    private Float amount;

    @Column(name = "amount_unit")
    private String amountUnit;

    @Column(name = "time_of_addition")
    private Date created;


}
