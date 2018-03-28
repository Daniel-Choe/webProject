import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoatSearch {

  constructor(private http: Http) { }

  boatsDropdown(data: any): Promise<any> {

    return this.http.post('http://localhost:3000/search', data)
      .toPromise()
      .then(
      response => response.json()
      ).catch(
      error => Promise.reject(error.json() || error)
      )
  }

}
