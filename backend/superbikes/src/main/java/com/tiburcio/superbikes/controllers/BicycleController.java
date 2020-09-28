package com.tiburcio.superbikes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiburcio.superbikes.entity.models.Bicycle;
import com.tiburcio.superbikes.entity.services.IBicycleService;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
public class BicycleController {
	
	@Autowired
	IBicycleService bicycleService;
	// Here are the end-points

	@GetMapping("/api/bicycles")
	private List<Bicycle> getAll(){
		return bicycleService.getAll();
	}
	
	@GetMapping("/api/bicycles/{id}")
	private Bicycle findOne(@PathVariable(value = "id") long id){
		System.out.println(id);
		return bicycleService.findOne(id);
	}
	
	@DeleteMapping("/api/bicycles/{id}")
	private void deleteBicycle(@PathVariable(value ="id") long id){
		bicycleService.deleteBicycle(id);
	}
	
	@PostMapping("/api/bicycles")
	private void addBicycle(Bicycle bicycle){
		bicycleService.addBicycle(bicycle);
	}
	
	@PutMapping("/api/bicycles/{id}")
	private Bicycle updateBicycle(Bicycle bicycle, @PathVariable(value = "id") long id) {
		return bicycleService.updateBicycle(bicycle, id);
	}
}
