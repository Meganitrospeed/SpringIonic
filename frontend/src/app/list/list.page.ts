import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicycle } from '../models/bicycle';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  bicycles: Bicycle[];

  constructor(private bicycleService: BicycleService, private router: Router) { }

  ngOnInit() {
    this.getAllBicycles();
  }

  ionViewWillEnter(){
    this.getAllBicycles();
  }

  getAllBicycles(){
    this.bicycleService.getBicycles().subscribe( bicycles => {
      this.bicycles = bicycles;
      console.log(bicycles);
    });

  }

  deleteBicycle(id: number){
    console.log("deletiando")
    this.bicycleService.deleteBicycle(id).subscribe( () => {
      this.getAllBicycles();
    });
  }

  insertBicycle(){
    console.log("from list page")
    this.router.navigateByUrl("/add-bicycle");
  }

  updateBicycle(id: number){
    console.log("from list page");

    this.bicycleService.setCurrentBicycleId(id);
    this.router.navigateByUrl("/update-bicycle");
  }

}
