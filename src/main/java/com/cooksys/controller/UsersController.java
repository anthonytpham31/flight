package com.cooksys.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.UsersDtoCreate;
import com.cooksys.dto.UsersDtoOutput;
import com.cooksys.service.UsersService;

@RestController
@RequestMapping("users")
public class UsersController {

	private UsersService usersService;
	
	@Autowired
	public UsersController(UsersService usersService) {
		super();
		this.usersService = usersService;
	}

	@CrossOrigin
	@RequestMapping(value = "/{username}", method = RequestMethod.GET)
	public UsersDtoOutput getUsersByName(@RequestParam(value = "username") String username,
			HttpServletResponse response) {
		UsersDtoOutput output = usersService.getUsersByName(username);
		if (output != null) {
			response.setStatus(HttpServletResponse.SC_OK);
			return output;
		} else {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
	}

	@CrossOrigin
	@RequestMapping(method = RequestMethod.POST)
	public UsersDtoOutput post(@RequestBody UsersDtoCreate usersDtoCreate, HttpServletResponse httpResponse) {
		UsersDtoOutput output = usersService.post(usersDtoCreate);
		if (output != null) {
			httpResponse.setStatus(HttpServletResponse.SC_CREATED);
			return output;
		} else {
			httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
	}

	@CrossOrigin
	@RequestMapping(value = "/{username}", method = RequestMethod.PATCH)
	public UsersDtoOutput patch(@PathVariable String username, @RequestBody UsersDtoCreate usersDto,
			HttpServletResponse httpResponse) {
		UsersDtoOutput output = usersService.patch(username, usersDto);
		if (output != null) {
			httpResponse.setStatus(HttpServletResponse.SC_OK);
			return output;
		} else {
			httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
	}

	@CrossOrigin
	@RequestMapping(value = "/{username}", method = RequestMethod.DELETE)
	public UsersDtoOutput delete(@PathVariable String username, HttpServletResponse httpResponse) {
		UsersDtoOutput output = usersService.deactivate(username);
		if (output != null) {
			httpResponse.setStatus(HttpServletResponse.SC_OK);
			return output;
		} else {
			httpResponse.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
	}

}
