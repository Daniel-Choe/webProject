import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoatList } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [BoatList]
})
export class WelcomeComponent implements OnInit {

  boatsDetails = [];

  paramname: string;

  constructor(private activatedRoute: ActivatedRoute, private bl: BoatList) {
    this.activatedRoute.params.subscribe(params => this.paramname = params['name'])

    this.bl.getBoatList(null).then(response => this.boatsDetails = response);
  }

  ngOnInit() {
  }

}
