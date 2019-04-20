package com.delta.InteractiveShoppingList;

import java.util.List;
import java.util.UUID;

enum Event{
    checked,
    text,
    position,
    date,
    delete
}

public class EventChange {
    private UUID uuid;
    private long userId;
    private long listId;
    private String title;
    private List<Event> eventList;
    public EventChange(long userId, long listId, String title, List<Event> eventList){
        this.eventList = eventList;
        this.listId = listId;
        this.title = title;
        this.userId = userId;
        this.uuid = UUID.randomUUID();
    }

    public String getTitle() {
        return title;
    }

    public long getListId() {
        return listId;
    }

    public long getUserId() {
        return userId;
    }
}
