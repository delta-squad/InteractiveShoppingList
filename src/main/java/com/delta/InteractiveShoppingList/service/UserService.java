package com.delta.InteractiveShoppingList.service;

import com.delta.InteractiveShoppingList.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class UserService {

    @Autowired
    UserDAO userDAO;


}
