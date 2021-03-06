package com.cooksys.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Itinerary {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@OneToMany(mappedBy = "flightPlan")
	private List<FlightData> flightPath;
	
	@ManyToOne
	private Users passenger;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<FlightData> getFlightPath() {
		return flightPath;
	}

	public void setFlightPath(List<FlightData> flightPath) {
		this.flightPath = flightPath;
	}
	
	public Users getPassenger() {
		return passenger;
	}

	public void setPassenger(Users passenger) {
		this.passenger = passenger;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Itinerary other = (Itinerary) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
