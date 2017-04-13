package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.FlightData;

@Repository
public interface FlightDataRepository extends JpaRepository<FlightData, Long> {
	
	FlightData findById(Long id);
	
	FlightData findByDestination(String destination);
}
