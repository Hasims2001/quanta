package com.MyInterview.modal;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class User {
   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String emailId;
	private String password;
	@OneToMany
	@JoinColumn(name = "attemptId")
	private List<Specialisation> techs;
	public User(String name, String emailId, String password, List<Specialisation> techs) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.password = password;
		this.techs = techs;
	}
	
	
	
	
}
