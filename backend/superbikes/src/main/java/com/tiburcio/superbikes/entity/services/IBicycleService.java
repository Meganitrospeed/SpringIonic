package com.tiburcio.superbikes.entity.services;

import java.util.List;

import com.tiburcio.superbikes.entity.models.Bicycle;

public interface IBicycleService {
	public List<Bicycle> getAll();

	public void addBicycle(Bicycle bicycle);

	public void deleteBicycle(int id);

	public void updateBicycle(int id, Bicycle bicycle);
}
