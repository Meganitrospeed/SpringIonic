import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-update-bicycle',
  templateUrl: './update-bicycle.page.html',
  styleUrls: ['./update-bicycle.page.scss'],
})
export class UpdateBicyclePage implements OnInit {

  constructor(private bicycleService: BicycleService) { }

  ngOnInit() {
  }

  findBicycle() {
    let id = this.bicycleService.getCurrentBicycleId();

    this.bicycleService.getBicycleById(id).subscribe( (b) => {
      
    })
  }

}
