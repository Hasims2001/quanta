package com.MyInterview.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyInterview.modal.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
