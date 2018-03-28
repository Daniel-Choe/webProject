import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from './booking-details.service';
import { FormBuilder, Validators } from '@angular/forms';
import { currentDateValidator } from './currentDate.validator';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
  providers: [BookingDetailsService]
})
export class BookingDetailsComponent implements OnInit {
  bookingdetails: any;
  txnId: string;
  userId: string;
  boatId: number;
  totalCost: number;
  pname: string;
  isUpdated: boolean;
  tResponse: any;
  today: Date;
  eDateError: string;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private bds: BookingDetailsService) {
    this.activatedRoute.params.subscribe(params => this.pname = params['txnId']);
    this.txnId = this.pname;
    this.bdetails();
    this.tResponse = "";
    let today = new Date().toISOString().slice(0, 10);
    //console.log("this.success Construc:", this.tResponse)
    //this.bds.getDetailsbyTxn(this.pname).then(function(response){
    //console.log(response)
    //})
  }

  updateForm = this.fb.group({
    startDate: ['', [Validators.required, currentDateValidator.startAfterCurrent]],
    endDate: ['', [Validators.required, currentDateValidator.startAfterCurrent]],
    mobileNo: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
  })

  checkEndDate() {
    // let dates = {"sDate": this.updateForm.value.startDate, "eDate": this.updateForm.value.startDate}
    var sDate = new Date(this.updateForm.value.endDate).getTime()
    var eDate = new Date(this.updateForm.value.startDate).getTime()
    // console.log(sDate)
    // console.log(eDate)
    // if(new Date(this.updateForm.value.endDate) < new Date(this.updateForm.value.startDate)){
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

  bdetails() {
    let message = { "txnId": this.txnId };
    this.bds.getDetailsbyTxn(message)
      .then((response: any) => {
        this.userId = response[0].userId
        this.boatId = response[0].boatId
        this.totalCost = response[0].totalCost
        // console.log(response[0].baseprice)
        // this.totalCost = (response.baseprice * (response.endDate - response.startDate)) - ((response.baseprice * (response.endDate - response.startDate))*response.discount)
        //console.log(response)
        console.log(this.totalCost)
      })
  }

  update() {
    let val = { "startDate": this.updateForm.value.startDate, "endDate": this.updateForm.value.endDate, "mobileNo": this.updateForm.value.mobileNo, "txnId": this.txnId }
    //console.log(val)
    this.bds.updateTxn(val).then(response => {
      //console.log("inside update: ",response)

      this.tResponse = response.message

      this.updateForm.reset()
    }).catch(error => this.tResponse = error.message)
  }

  ngOnInit() {
    //console.log("this.successMsg: ",this.tResponse)
  }

}
