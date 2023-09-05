package com.MyInterview.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.MyInterview.modal.ChatRequest;
import com.MyInterview.modal.ChatResponse;



@RestController
@RequestMapping("/bot")
public class UserController {
	

	    @Value("${openai.model}")
	    private String model;

	    @Value(("${openai.api.url}"))
	    private String apiURL;

	    @Autowired
	    private RestTemplate template;
	   
	    @GetMapping("/chat")
	    public String chat(@RequestParam("prompt") String prompt){
	        ChatRequest request=new ChatRequest(model, prompt);
	        ChatResponse chatGptResponse = template.postForObject(apiURL, request, ChatResponse.class);
	        return chatGptResponse.getChoices().get(0).getMessage().getContent();
	    }
	
}
