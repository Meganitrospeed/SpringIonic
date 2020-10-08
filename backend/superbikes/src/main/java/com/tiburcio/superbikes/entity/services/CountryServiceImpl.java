package com.tiburcio.superbikes.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiburcio.superbikes.entity.dao.ICountryDao;
import com.tiburcio.superbikes.entity.models.Bicycle;
import com.tiburcio.superbikes.entity.models.Country;

@Service
public class CountryServiceImpl implements ICountryService{

	@Autowired
	ICountryDao countryDao;
	
	@Override
	public List<Country> getAllCountries() {
		return (List<Country>) countryDao.findAll();
	}

	@Override
	public List<Bicycle> getBicyclesFromACountry(int id) {
		return countryDao.findAllBicyclesInACountry(id);
	}

}
