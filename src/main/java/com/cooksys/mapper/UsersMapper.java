package com.cooksys.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.cooksys.dto.UsersDtoCreate;
import com.cooksys.dto.UsersDtoOutput;
import com.cooksys.entity.Users;

@Mapper(componentModel = "spring")
public interface UsersMapper {
	
	
	
	Users toUsers(UsersDtoCreate usersDtoCreate);

		@Mappings({
			@Mapping(source = "credentials.username",target="username"),
			@Mapping(source = "profile", target = "profile"),
		})
	UsersDtoOutput toUsersDtoOutput(Users users);
}
