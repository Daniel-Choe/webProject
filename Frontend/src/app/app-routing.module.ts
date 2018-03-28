import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { BookThisComponent } from './book-this/book-this.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: 'boat-details', component: BoatDetailsComponent },
  { path: 'book-this/:boatId', component: BookThisComponent },
  { path: 'all-booking', component: AllBookingComponent },
  { path: 'booking-details/:txnId', component: BookingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
