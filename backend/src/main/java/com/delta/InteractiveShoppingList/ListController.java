package com.delta.InteractiveShoppingList;


import com.delta.InteractiveShoppingList.EventChange;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ListController {

    @MessageMapping("/eventChange")
    @SendTo("topic/eventChange")
    public String eventChange(@Payload String mesage){
        //Thread.sleep(1000); // simulated delay
        System.out.println("Recevied: " + mesage);
        return mesage;
    }


}
