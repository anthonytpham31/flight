package com.cooksys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.pojo.Credentials;
import com.cooksys.repository.UsersRepository;

@Service
public class ValidateService {
	
	@Autowired
	private UsersRepository usersRepository;
	
	public boolean userAvailable(String substring) {
        return usersRepository.findByCredentialsUsername(substring) != null;
    }

    public boolean userExists(String substring) {
        return usersRepository.findByCredentialsUsernameAndIsActiveTrue(substring) != null;
    }
    
    public boolean login(Credentials creds) {
        return usersRepository.findByCredentialsUsernameAndCredentialsPassword(creds.getUsername(), creds.getPassword()) != null;
    }
}
