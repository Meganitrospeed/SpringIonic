import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.page.html',
  styleUrls: ['./add-bicycle.page.scss'],
})
export class AddBicyclePage implements OnInit {

  bicycleForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private bicycleService: BicycleService,
    private router: Router) {
    this.bicycleForm = this.fb.group({
      model: [''],
      brand: ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.bicycleForm.valid) {
      return false;
    } else {
      let bicycle = {
        id: null,
        model: this.bicycleForm.value.model,
        brand: this.bicycleForm.value.brand
      }
      this.bicycleService.addBicycle(bicycle)
        .subscribe((res) => {
          this.router.navigateByUrl("/list");
        });
    }
  }

}
