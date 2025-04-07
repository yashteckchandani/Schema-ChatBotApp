package com.springboot.chatapp.dto;

import java.util.List;

public record ChatResponse(List<Choice> choices) {

    public static record Choice(Message message) {

        public static record Message(String role, String content) {
        }
    }
}
