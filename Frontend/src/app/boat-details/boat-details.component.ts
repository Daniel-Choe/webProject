import { Component, OnInit } from '@angular/core';

import { BoatDetails } from './boat-details.service';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-boat-details',
  templateUrl: './boat-details.component.html',
  styleUrls: ['./boat-details.component.css'],
  providers: [BoatDetails]
})
export class BoatDetailsComponent implements OnInit {

  boatType: string
  location: string
  boats: object;
  listOfBoats = [];
  constructor(private bd: BoatDetails) {
    this.boatType = sessionStorage.getItem("boatType");
    this.location = sessionStorage.getItem("location");
    sessionStorage.clear();
    let message = { 'boatType': this.boatType, 'location': this.location };
    this.boats = {};
    this.bd.getBoatDetails(message).then((response) => {
      console.log("listboats", this.boats)

      for (let i = 0; i < response.length; i++) {
        this.boats = response[i];
        this.listOfBoats.push(this.boats)
        // console.log(`boat ${i}: ${this.listOfBoats[i].boatType}`)
      }
    });
  }


  ngOnInit() {
  }

}
