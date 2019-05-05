package com.delta.InteractiveShoppingList.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class ListService {

    @Autowired
    ListDAO listDAO;

}
