package com.tiburcio.superbikes.entity.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bicycles")
public class Bicycle implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String model;
	
	@Column
	private String brand;
	
	@ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "made_in")
	private Country madeIn;
	
	public Bicycle() {}

	public Bicycle(int id, String model, String brand) {
		super();
		this.id = id;
		this.model = model;
		this.brand = brand;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Country getMadeIn() {
		return madeIn;
	}

	public void setMadeIn(Country madeIn) {
		this.madeIn = madeIn;
	}

	
}
