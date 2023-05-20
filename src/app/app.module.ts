import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';
import { DeclarationListEmitMode } from '@angular/compiler';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HomeComponent,
    DescriptionComponent,
    HousingLocationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
