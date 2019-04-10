package com.delta.InteractiveShoppingList.contoller;

import com.delta.InteractiveShoppingList.dto.UserDTO;
import com.delta.InteractiveShoppingList.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Principal login(@RequestBody UserDTO userDTO, HttpServletRequest request) {
        if (userService.isUserDataIsCorrect(userDTO.getUserName(), userDTO.getPassword())) {
            String authToken = request.getHeader("Authorization")
                    .substring("Basic".length()).trim();
            return () -> new String(Base64.getDecoder()
                    .decode(authToken)).split(":")[0];

        } else {
            return null;
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public boolean register(@RequestBody UserDTO userDTO){
        return userService.registerUser(userDTO);
    }
}
