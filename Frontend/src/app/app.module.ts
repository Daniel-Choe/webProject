import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { BookThisComponent } from './book-this/book-this.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AllBookingComponent,
    BookThisComponent,
    BookingDetailsComponent,
    WelcomeComponent,
    SearchComponent,
    BoatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
