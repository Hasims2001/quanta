package com.MyInterview.service;

import org.springframework.stereotype.Service;

import com.MyInterview.repository.AttemptRepo;

@Service
public class AttemptService {

	private AttemptRepo repo;

	public AttemptService(AttemptRepo repo) {
		super();
		this.repo = repo;
	}
	
}
