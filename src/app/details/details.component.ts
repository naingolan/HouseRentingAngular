import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { switchMap } from 'rxjs/operators';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
  housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName : new FormControl(''),
    secondName : new FormControl(''),
    email : new FormControl(''),
  })
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
  });
   }
 
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.secondName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  ngOnInit(): void {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
    });
  }
}