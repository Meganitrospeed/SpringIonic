package com.tiburcio.superbikes.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiburcio.superbikes.entity.dao.IBicycleDao;
import com.tiburcio.superbikes.entity.models.Bicycle;

@Service
public class BicycleServiceImpl implements IBicycleService {

	@Autowired
	IBicycleDao bicycleDao;

	@Override
	public List<Bicycle> getAll() {
		// TODO Auto-generated method stub
		return (List<Bicycle>) bicycleDao.findAll();
	}

	@Override
	public void deleteBicycle(long id) {
		// TODO Auto-generated method stub
		bicycleDao.deleteById(id);
	}

	@Override
	public void addBicycle(Bicycle bicycle) {
		bicycleDao.save(bicycle);
	}

	@Override
	public Bicycle updateBicycle(Bicycle bicycle, long id) {
		Optional<Bicycle> b = bicycleDao.findById(id);

		if (b.isPresent()) {
			bicycle.setId(id);
			return bicycleDao.save(bicycle);
		}

		return null;
	}

	@Override
	public Bicycle findOne(long id) {
		Optional<Bicycle> b = bicycleDao.findById(id);

		if (b.isPresent()) {
			return b.get();
		}

		return null;
	}

}
