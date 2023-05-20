import { Component, Input, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../description/description.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { createInjectableType } from '@angular/compiler';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DescriptionComponent,
    HousingLocationComponent,
  ],
  template: `
    <input type="text" placeholder="Enter the name of the city" #filter>
    <button 
    type="submit"
    (click)="filterResults(filter.value)"
    >Search</button>
    <app-description></app-description>
    <section class="results">
    <app-housing-location 
    *ngFor="let housingLocation of filteredLocationList"
    [housingLocation]="housingLocation">
  </app-housing-location>
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filteredLocationList : Housinglocation[] = [];
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
  
}

