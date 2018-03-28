import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoatList } from '../welcome/welcome.service';
import { BoatSearch } from '../search/search.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    BoatList,
    BoatSearch
  ]
})
export class SearchComponent implements OnInit {

  boatsDetails = [];
  listLocation = [];

  boatType: string;
  paramname: string;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private bl: BoatList, private bs: BoatSearch, private router: Router) {
    this.activatedRoute.params.subscribe(params => this.paramname = params['name']);
    this.bl.getBoatList(null).then(response => this.boatsDetails = response);
  }

  boatsListForm = this.fb.group({
    selectedBoatType: ['', [Validators.required]],
    selectedLocation: ['', [Validators.required]]
  })

  clickBoatType() {
    this.listLocation = [];
    if (this.boatsListForm.value.selectedBoatType.length > 0) {
      let msg = { 'boatType': this.boatsListForm.value.selectedBoatType };
      this.boatsListForm.setValue({
        selectedBoatType: this.boatsListForm.value.selectedBoatType,
        selectedLocation: ''
      })
      this.bs.boatsDropdown(msg).then(response => this.listLocation = response);
    }
  }

  clickLocationType() {
    this.boatsListForm.setValue({
      selectedBoatType: this.boatsListForm.value.selectedBoatType,
      selectedLocation: this.boatsListForm.value.selectedLocation
    })
  }

  submitBoatLocation() {
    // console.log('boatType: ' + this.boatsListForm.value.selectedBoatType)
    // console.log('location: ' + this.boatsListForm.value.selectedLocation)
    sessionStorage.setItem("boatType", this.boatsListForm.value.selectedBoatType);
    sessionStorage.setItem("location", this.boatsListForm.value.selectedLocation);
    this.router.navigate(['/boat-details']);
  }

  ngOnInit() {
    if (this.paramname != undefined) {
      let msg = { 'boatType': this.paramname };
      this.bs.boatsDropdown(msg).then(response => this.listLocation = response);
      this.boatsListForm.setValue({
        selectedBoatType: this.paramname,
        selectedLocation: ''
      })
    }
  }

}
