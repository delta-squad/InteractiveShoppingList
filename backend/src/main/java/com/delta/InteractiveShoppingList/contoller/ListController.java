package com.delta.InteractiveShoppingList.contoller;


import com.delta.InteractiveShoppingList.EventChange;
import com.delta.InteractiveShoppingList.List;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ListController {

    @MessageMapping("/api/list/eventChange/{listId}")
    @SendTo("/api/list/eventChange/topic/{listId}")
    public EventChange eventChange(EventChange eventChange){
        //Thread.sleep(1000); // simulated delay
        System.out.println("Recevied: " + eventChange.getTitle() + " form " + eventChange.getUserId());
        return eventChange;
    }

}
