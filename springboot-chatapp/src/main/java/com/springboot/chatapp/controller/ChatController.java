package com.springboot.chatapp.controller;

import com.springboot.chatapp.dto.PromptRequest;
import com.springboot.chatapp.service.ChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService){
        this.chatService=chatService;
    }

    @PostMapping
    public String chat(@RequestBody PromptRequest promptRequest){
        return chatService.GetChatResponse(promptRequest);
    }

    @PutMapping
    public String setContext(@RequestBody PromptRequest promptRequest){
        this.chatService.SetContext(promptRequest);
        return "OK";
    }

    @PostMapping("/clear")
    public void clearContext(){
        this.chatService.ClearContext();
    }
}
