import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookingList {
  constructor(private http: Http) { }

  getAllBookings(data: any): Promise<any> {
    return this.http.post('http://localhost:3000/allBookings', data)
      .toPromise()
      .then(
      response => response.json()
      ).catch(
      error => Promise.reject(error.json() || error)
      );
  }

  deleteRecord(data: any): Promise<any> {
    console.log("before")
    return this.http.post('http://localhost:3000/delete', data)
      .toPromise()
      .then(function (response) {
        console.log("after")
        return response.json()
      }
      // response => response.json()
      ).catch(
      error => Promise.reject(error.json() || error)
      );
  }

}
