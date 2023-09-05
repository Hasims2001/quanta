package com.MyInterview.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@Entity
public class Attempt {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer attemptId;
	private String techName;
	private Integer communicationSkills;
	private Integer subjectMatterExpertise;
	private Integer problemSolvingSkills;
	public Attempt(String techName, Integer communicationSkills, Integer subjectMatterExpertise,
			Integer problemSolvingSkills) {
		super();
		this.techName = techName;
		this.communicationSkills = communicationSkills;
		this.subjectMatterExpertise = subjectMatterExpertise;
		this.problemSolvingSkills = problemSolvingSkills;
	}
	
	
}
