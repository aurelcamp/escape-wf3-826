import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  async login(email: string, password: string) {
    const data = await this.http.post('http://api.les-combien.com/api/login', {username: email, password: password}).toPromise();
    console.log(data);
  }
}
