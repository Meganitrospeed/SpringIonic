import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-update-bicycle',
  templateUrl: './update-bicycle.page.html',
  styleUrls: ['./update-bicycle.page.scss'],
})
export class UpdateBicyclePage implements OnInit {

  bicycleForm: FormGroup;

  constructor(public fb: FormBuilder, private bicycleService: BicycleService, private router: Router) { 
    this.bicycleForm = this.fb.group({
      model: [''],
      brand: ['']
    });
  }

  ngOnInit() {
    console.log("in update-bicycle")
    this.bicycleService.getBicycle(this.bicycleService.getCurrentBicycleId()).subscribe(b => {
      this.bicycleForm.setValue({
        model: b.model,
        brand: b.brand
      })
    })
  }

  onFormSubmit(){
    if(!this.bicycleForm.valid){
      return false;
    } else {
      console.log(this.bicycleForm.value)
      let bicycle = {
        id: this.bicycleService.getCurrentBicycleId(),
        model: this.bicycleForm.value.model,
        brand: this.bicycleForm.value.brand
      };
      this.bicycleService.updateBicycle(bicycle).subscribe(() => {
        console.log("Bicycle updated")
        this.router.navigateByUrl("/list");
      })
    }
  }



}
