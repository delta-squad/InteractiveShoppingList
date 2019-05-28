package com.delta.InteractiveShoppingList;

import com.fasterxml.jackson.annotation.JsonProperty;

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
    public EventChange(@JsonProperty("uuid") UUID uuid, @JsonProperty("userId") long userId,
                       @JsonProperty("listId") long listId, @JsonProperty("title") String title,
                       @JsonProperty("eventList") List<Event> eventList){
        this.uuid = uuid;
        this.userId = userId;
        this.listId = listId;
        this.title = title;
        this.eventList = eventList;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getListId() {
        return listId;
    }

    public void setListId(long listId) {
        this.listId = listId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Event> getEventList() {
        return eventList;
    }

    public void setEventList(List<Event> eventList) {
        this.eventList = eventList;
    }
}
