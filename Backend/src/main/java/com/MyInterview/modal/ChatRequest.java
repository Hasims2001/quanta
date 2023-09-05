package com.MyInterview.modal;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ChatRequest {

    private String model;
    private List<Message> messages;

    public ChatRequest(String model, String prompt) {
        this.model = model;
        this.messages = new ArrayList<>();
        this.messages.add(new Message("user",prompt));
    }
}
