package com.MyInterview.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyInterview.modal.Attempt;

public interface AttemptRepo extends JpaRepository<Attempt, Integer> {

}
