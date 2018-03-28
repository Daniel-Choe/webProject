import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoatList {

  constructor(private http: Http) { }

  getBoatList(data: any): Promise<any> {

    return this.http.post('http://localhost:3000/list', data)
      .toPromise()
      .then(
      response => response.json()
      ).catch(
      error => Promise.reject(error.json() || error)
      )
  }

}
