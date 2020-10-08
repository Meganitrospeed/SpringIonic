package com.tiburcio.superbikes.entity.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "countries")
public class Country implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String name;
	
	@JsonIgnore
	@OneToMany(mappedBy = "madeIn", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<Bicycle> bicycles;

	public Set<Bicycle> getBicycles() {
		return bicycles;
	}

	public void setBicycles(Set<Bicycle> bicycles) {
		this.bicycles = bicycles;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
