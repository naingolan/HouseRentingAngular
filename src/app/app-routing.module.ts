import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'homme', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'housinglocation', component:HousingLocationComponent},
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
