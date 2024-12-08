package com.logic.first.ems_backend.model;

import jakarta.persistence.*;
//import jakarta.persistence.GeneratedValue.strategy;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userid")
	private Long userId;
	private String userName;
	private String phone;
	private String email;
	private Long salary;
	private String password;

	public User() {
		super();
	}

	public User(Long userId, String userName, String phone, String email, Long salary, String password) {
		this.userId = userId;
		this.userName = userName;
		this.phone = phone;
		this.email = email;
		this.salary = salary;
		this.password = password;
	}

	public Long getUserId() {
		return userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getSalary() {
		return salary;
	}

	public void setSalary(Long salary) {
		this.salary = salary;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}


}
