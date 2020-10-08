package com.tiburcio.superbikes.entity.services;

import java.util.List;

import com.tiburcio.superbikes.entity.models.Bicycle;
import com.tiburcio.superbikes.entity.models.Country;

public interface ICountryService {

	List<Country> getAllCountries();

	List<Bicycle> getBicyclesFromACountry(int id);
	
}
