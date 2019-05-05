package com.delta.InteractiveShoppingList.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Date;

@Component
@Service
public class UserService {

    @Autowired
    UserDAO userDAO;

    public boolean isUserDataCorrect(String login, String password) {
        User user = userDAO.getUserByLogin(login);
        if (user != null) {
            return user.getPassword().equals(password);
        } else {
            return false;
        }
    }

    public boolean registerUser(UserDTO userDTO) {
        return userDAO.registerUser(
                new User(userDTO.getLogin(), userDTO.getPassword(), userDTO.getEmailAddress(), 1, new Date())
        );
    }
}
