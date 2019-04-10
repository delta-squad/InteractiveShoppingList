package com.delta.InteractiveShoppingList.service;

import com.delta.InteractiveShoppingList.dao.UserDAO;
import com.delta.InteractiveShoppingList.dao.User;
import com.delta.InteractiveShoppingList.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class UserService {

    @Autowired
    UserDAO userDAO;

    public boolean isUserDataIsCorrect(String userName, String password) {
        User user = userDAO.getUserByUsername(userName);
        if (user != null) {
            return user.getPassword().equals(password);
        } else {
            return false;
        }
    }

    public boolean registerUser(UserDTO userDTO) {
        return userDAO.registerUser(new User(userDTO.getUserName(), userDTO.getPassword(), userDTO.getEmailAddress()));
    }
}
