package com.cooksys.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.service.ItineraryService;

@RestController
@RequestMapping("itinerary")
public class ItineraryController {
	
	ItineraryService itinService;
	
	
}
