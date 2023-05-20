import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { DetailsComponent } from '../details/details.component';
import { RouterModule, RouterLink } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    DetailsComponent,
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <!--<a [routerLink]="['/details', housingLocation.id]">Learn More</a>-->
    <a (click)="navigateToDetails(housingLocation.id)">Learn More</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input()housingLocation!:Housinglocation;
  constructor(private router: Router){

  }
  navigateToDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
  

}
