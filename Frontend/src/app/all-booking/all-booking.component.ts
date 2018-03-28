import { Component, OnInit } from '@angular/core';
import { BookingList } from './all-booking.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css'],
  providers: [BookingList]
})
export class AllBookingComponent implements OnInit {
  allbooking: any[];
  txnId: number;
  userId: number;
  boatId: number;
  totalCost: number;
  deleteRow: any;
  route: any;

  constructor(private bl: BookingList, private router: Router) {
    this.bl.getAllBookings(null)
      .then(response => {
        this.allbooking = response
      }).catch(error => console.log(error))

  }

  deleteBooking(txnId) {
    let tId = { "txnId": txnId };
    this.deleteRow = confirm("Are you sure you want to DELETE -->" + txnId);

    if (this.deleteRow) {
      this.bl.deleteRecord(tId)
        .then(response => {
          this.bl.getAllBookings(null)
            .then(response => {
              this.allbooking = response
            }).catch(error => console.log(error))
        }).catch(error => console.log(error))
    }
  }

  ngOnInit() {
  }

}
