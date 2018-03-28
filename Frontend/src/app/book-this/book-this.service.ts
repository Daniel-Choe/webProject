import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookThis {

  constructor(private http: Http) { }

  bookBoat(data: any): Promise<any> {
    return this.http.post('http://localhost:3000/bookThis', data)
      .toPromise()
      .then(
      response => {
        return response.text()
      }
      ).catch(error => { Promise.reject(error.json() || error) })
  }

  getDiscount(data: any): Promise<any> {
    return this.http.post('http://localhost:3000/getDiscount', data)
      .toPromise()
      .then(
      response => {
        return response.text()
      }
      ).catch(
      error => Promise.reject(error.json() || error)
      )
  }

}
