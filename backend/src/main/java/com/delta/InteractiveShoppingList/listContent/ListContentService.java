package com.delta.InteractiveShoppingList.listContent;

import com.delta.InteractiveShoppingList.list.ListDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class ListContentService {

    @Autowired
    ListDAO listDAO;
}
