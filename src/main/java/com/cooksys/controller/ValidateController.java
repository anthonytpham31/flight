package com.cooksys.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.pojo.Credentials;
import com.cooksys.service.ValidateService;

@RestController
@Validated
@RequestMapping("validate")
public class ValidateController {
	
	@Autowired
	private ValidateService validateService;
	
	@CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/username/available/@{name}")
    public boolean userAvailable(@PathVariable String name, HttpServletResponse httpResponse) {
        return validateService.userAvailable(name);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/username/exists/@{name}")
    public boolean userExists(@PathVariable String name) {
        return validateService.userExists(name);
    }
    
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public boolean login(@RequestBody Credentials creds, HttpServletResponse httpResponse) {
        httpResponse.setStatus(HttpServletResponse.SC_OK);
        return validateService.login(creds);
    }
}
