import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class BookingDetailsService {

  constructor(private http: Http) { }

  getDetailsbyTxn(data: any): Promise<any> {

    return this.http.post('http://localhost:3000/getDetailsbyTxn', data)
      .toPromise()
      .then(
      response => response.json()
      ).catch(
      error => Promise.reject(error.json() || error)
      );
  }
  updateTxn(data: any): Promise<any> {

    return this.http.post('http://localhost:3000/updateTxn', data)
      .toPromise()
      .then(response => { return response.json() })
      .catch(error => Promise.reject(error.json() || error));
  }
}
