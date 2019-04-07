package com.delta.InteractiveShoppingList.contoller;

import com.delta.InteractiveShoppingList.dto.UserDTO;
import com.delta.InteractiveShoppingList.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
@CrossOrigin
@RequestMapping("")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Principal login(@RequestBody UserDTO userDTO, HttpServletRequest request) {

        if (userDTO.getUserName().equals("user") && userDTO.getPassword().equals("password")){
            String authToken = request.getHeader("Authorization")
                    .substring("Basic".length()).trim();
            return () -> new String(Base64.getDecoder()
                    .decode(authToken)).split(":")[0];

        }
        else {
            return null;
        }
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }

}
