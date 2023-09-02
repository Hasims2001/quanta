package com.MyInterview.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyInterview.modal.Specialisation;

public interface TechRepo extends JpaRepository<Specialisation, Integer> {

}
