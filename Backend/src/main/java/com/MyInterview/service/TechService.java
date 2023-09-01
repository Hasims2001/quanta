package com.MyInterview.service;

import org.springframework.stereotype.Service;

import com.MyInterview.repository.TechRepo;

@Service
public class TechService {

	private TechRepo repo;

	public TechService(TechRepo repo) {
		super();
		this.repo = repo;
	}
	
}
