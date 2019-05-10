package com.delta.InteractiveShoppingList.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Date;

@Component
@Service
public class UserService implements UserDetailsService {

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
                new User(userDTO.getLogin(), userDTO.getEmailAddress(), userDTO.getPassword(),1, new Date())
        );
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDAO.getUserByLogin(username);
        if(user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new MyUserDetails(user);
    }
}
