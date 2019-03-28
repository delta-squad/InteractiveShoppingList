package com.delta.InteractiveShoppingList.contoller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class UserController {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public boolean login() {
        return true;
    }


}
