package com.MyInterview.service;

import org.springframework.stereotype.Service;

import com.MyInterview.repository.UserRepo;

@Service
public class UserService {

	private UserRepo repo;

	public UserService(UserRepo repo) {
		super();
		this.repo = repo;
	}
	
}
