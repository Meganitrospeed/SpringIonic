package com.tiburcio.superbikes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiburcio.superbikes.entity.models.Bicycle;
import com.tiburcio.superbikes.entity.services.IBicycleService;

@RestController
public class BicycleController {
	
	@Autowired
	IBicycleService bicycleService;
	// Here are the end-points

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/api/bicycles")
	private List<Bicycle> getAll(){
		return bicycleService.getAll();
	}
	
	@PostMapping("/api/bicycles")
	private void addBicycle(Bicycle bicycle) {
		bicycleService.addBicycle(bicycle);
	}
	
	@DeleteMapping("/api/bicycles/{id}")
	private void deleteBicycle(@PathVariable(value = "id") int id) {
		bicycleService.deleteBicycle(id);
	}
}
