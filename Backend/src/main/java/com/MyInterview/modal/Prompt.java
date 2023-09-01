package com.MyInterview.modal;

import java.util.List;

import jakarta.persistence.Embeddable;
@Embeddable
public class Prompt {

	private List<String> questions;
	private String promt;
	private Integer number;
	
	public void start() {
		promt = "When the interview starts welcome the interviewee and ask them to introduce themselves.";
		
	}
	
	
}
