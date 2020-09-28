package com.tiburcio.superbikes.entity.services;

import java.util.List;

import com.tiburcio.superbikes.entity.models.Bicycle;

public interface IBicycleService {
	public List<Bicycle> getAll();

	public void deleteBicycle(long id);

	public void addBicycle(Bicycle bicycle);

	public Bicycle updateBicycle(Bicycle bicycle, long id);

	public Bicycle findOne(long id);
}
