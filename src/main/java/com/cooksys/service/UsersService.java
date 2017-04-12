package com.cooksys.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.cooksys.dto.UsersDtoCreate;
import com.cooksys.dto.UsersDtoOutput;
import com.cooksys.entity.Users;
import com.cooksys.mapper.UsersMapper;
import com.cooksys.pojo.Credentials;
import com.cooksys.pojo.Profile;
import com.cooksys.repository.UsersRepository;

public class UsersService {
	
	//@Autowired
	private UsersMapper usersMapper;
	
	//@Autowired
	private UsersRepository usersRepository;
	
	public UsersDtoOutput getUsersByName(String username) {
		return usersMapper.toUsersDtoOutput(usersRepository.findByCredentialsUsername(username));
	}

	public UsersDtoOutput post(UsersDtoCreate usersDtoCreate) {
		Long idOf = usersRepository.saveAndFlush(usersMapper.toUsers(usersDtoCreate)).getId();
        return usersMapper.toUsersDtoOutput(usersRepository.findOne(idOf));
	}

	public UsersDtoOutput patch(String username, UsersDtoCreate usersDto) {
		Users usersExistant = usersRepository.findByCredentialsUsername(username);
        Credentials existingCreds = usersExistant.getCredentials();
        Credentials dtoCreds = usersDto.getCredentials();
        if (usersExistant == null
                || !existingCreds.getUsername().equals(dtoCreds.getUsername())
                || !existingCreds.getPassword().equals(dtoCreds.getPassword())) {
            return null;
        } else {
            Profile existingProfile = usersExistant.getProfile();
            Profile dtoProfile = usersDto.getProfile();
            if (usersDto.getProfile().getEmail() != null) {
                existingProfile.setEmail(dtoProfile.getEmail());
            }
            if (usersDto.getProfile().getFirstName() != null) {
                existingProfile.setFirstName(dtoProfile.getFirstName());
            }
            if (usersDto.getProfile().getLastName() != null) {
                existingProfile.setFirstName(dtoProfile.getLastName());
            }
            if(usersDto.getProfile().getPhone() != null) {
                existingProfile.setPhone(dtoProfile.getPhone());
            }
            usersRepository.saveAndFlush(usersExistant);
            return usersMapper.toUsersDtoOutput(usersExistant);
        }
	}

	public UsersDtoOutput deactivate(String username) {
		Users user = usersRepository.findByCredentialsUsername(username);
        if (user != null) {
            user.setActive(false);
            usersRepository.saveAndFlush(user);
            return usersMapper.toUsersDtoOutput(user);
        } else {
            return null;
        }
	}

}
