package com.delta.InteractiveShoppingList;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ListController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public List greeting(List list) throws Exception {
        //Thread.sleep(1000); // simulated delay
        return new List();
    }

}
