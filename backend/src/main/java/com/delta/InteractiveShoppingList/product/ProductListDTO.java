package com.delta.InteractiveShoppingList.product;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class ProductListDTO {

    Long id;
    String name;
    Integer version;

    public ProductListDTO(Long id, String name, Integer version) {
        this.id = id;
        this.name = name;
        this.version = version;
    }

    public ProductListDTO(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }
}
