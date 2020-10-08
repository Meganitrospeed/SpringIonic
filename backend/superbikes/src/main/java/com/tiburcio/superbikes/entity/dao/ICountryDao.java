package com.tiburcio.superbikes.entity.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.tiburcio.superbikes.entity.models.Bicycle;
import com.tiburcio.superbikes.entity.models.Country;

public interface ICountryDao extends CrudRepository<Country, Integer>{
	
	@Query("SELECT c.bicycles FROM Country c WHERE c.id = :countryId")
	public List<Bicycle> findAllBicyclesInACountry(@Param("countryId") int id);
}
