import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoatDetails {
  constructor(private http: Http) { }

  getBoatDetails(data: any): Promise<any> {
    console.log("Services")
    return this.http.post('http://localhost:3000/boats', data)
      .toPromise()
      .then(
      response => response.json()
      ).catch(
      error => Promise.reject(error.json() || error)
      );
  }
}
