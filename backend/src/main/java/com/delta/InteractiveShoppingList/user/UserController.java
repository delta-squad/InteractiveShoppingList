package com.delta.InteractiveShoppingList.user;

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

    @RequestMapping("/login")
    public boolean login(@RequestBody UserDTO userDto) {
        return
                (userService.isUserDataCorrect(userDto.getLogin(), userDto.getPassword()));
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public boolean register(@RequestBody UserDTO userDTO) {
        return userService.registerUser(userDTO);
    }
}
