package com.springboot.chatapp.service;

import com.springboot.chatapp.dto.ChatRequest;
import com.springboot.chatapp.dto.ChatResponse;
import com.springboot.chatapp.dto.PromptRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    private final RestClient restClient;

    // Stores the conversation history as a list of Message objects
    private List<ChatRequest.Message> conversationHistory = new ArrayList<>();

    public ChatService(RestClient restClient){
        this.restClient = restClient;
    }

    @Value("${openapi.api.key}")
    private String apiKey;

    @Value("${openapi.api.model}")
    private String model;

    public void ClearContext(){
        conversationHistory.clear();
    }

    public void SetContext(PromptRequest promptRequest){
        ChatRequest.Message userMessage = new ChatRequest.Message("user", promptRequest.prompt());
        conversationHistory.clear();
        conversationHistory.add(userMessage);
    }

    public String GetChatResponse(PromptRequest promptRequest) {
        try {
            // Create the new user message
            ChatRequest.Message userMessage = new ChatRequest.Message("user", promptRequest.prompt());

            // Add the user message to the conversation history
            conversationHistory.add(userMessage);

            // Create the chat request with the full conversation history
            ChatRequest chatRequest = new ChatRequest(
                    model,
                    conversationHistory // Send the entire conversation history
            );

            // Call the API with the conversation history
            ChatResponse response = restClient.post()
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .body(chatRequest)
                    .retrieve()
                    .body(ChatResponse.class);

            // Check if we have a valid response
            if (response != null) {
                String aiResponse = response.choices().get(0).message().content();

                // Add the AI response to the conversation history
                ChatRequest.Message aiMessage = new ChatRequest.Message("assistant", aiResponse);
                conversationHistory.add(aiMessage);

                return aiResponse; // Return the AI response to the user
            } else {
                return "no response";
            }
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}
