package com.delta.InteractiveShoppingList.user;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class UserDTO {

    private String userName;
    private String password;
    private String emailAddress;

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getLogin() {
        return userName;
    }

    public String getPassword() {
        return password;
    }
}
