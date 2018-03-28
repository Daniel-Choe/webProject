import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BookThis } from './book-this.service';
import { currentDateValidator } from './currentDate.validator';

@Component({
  selector: 'app-book-this',
  templateUrl: './book-this.component.html',
  styleUrls: ['./book-this.component.css'],
  providers: [
    BookThis
  ]
})

export class BookThisComponent implements OnInit {
  paramname: string;
  boatId: string;
  discount: number;
  txnId: number;
  eDateError: string;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private bt: BookThis) {
    this.activatedRoute.params.subscribe(params => this.paramname = params['boatId']);
    this.boatId = this.paramname;
    let today = new Date().toISOString().slice(0, 10);
    let msg = { "boatId": this.boatId }
    this.bt.getDiscount(msg).then((result) => {
      this.discount = parseFloat(result)
      console.log("discount: ", typeof this.discount)
    }).catch((err) => { throw err });
  }

  bookThisForm = this.fb.group({
    startDate: ['', [Validators.required, currentDateValidator.startAfterCurrent]],
    endDate: ['', [Validators.required, currentDateValidator.startAfterCurrent]],
    mobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    userId: ['', [Validators.required, Validators.pattern('[0-9]{4}')]]
  });

  checkEndDate() {
    var sDate = new Date(this.bookThisForm.value.endDate).getTime()
    var eDate = new Date(this.bookThisForm.value.startDate).getTime()

    if (sDate - eDate < 0) {
      // console.log(sDate)
      // console.log(eDate)
      this.eDateError = "End Date must be on or greater than Start Date";
    } else if (eDate - sDate >= 0) {
      this.eDateError = "";
    } else {
      this.eDateError = "";
    }
  }

  submitBooking() {
    let msg = {
      "userId": this.bookThisForm.value.userId, "startDate": this.bookThisForm.value.startDate,
      "endDate": this.bookThisForm.value.endDate, "mobileNo": this.bookThisForm.value.mobileNo,
      "boatId": this.boatId
    }

    this.bt.bookBoat(msg).then((txnId) => {
      this.txnId = parseInt(txnId)
      alert(`Boat ${this.boatId} booked successfully. Your transaction Id is ${this.txnId}`)
      // this.bookThisForm.reset();
      this.bookThisForm.reset()
    }).catch((err) => { throw err })
  }

  ngOnInit() {
  }

}
