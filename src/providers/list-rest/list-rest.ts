import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListRestProvider {

  endpoint = 'https://api-flask-leonardobenedeti.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello ListRestProvider Provider');
  }

  getList(api) {
    return new Promise((resolve, reject) => {
      this.http.get(this.endpoint+api)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err)
      });
    });
  }

}
