import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient ) {
    console.log('Servicio persona')
  }
  getUsers() {
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(this.url, {
      headers: heades
    });
  }
}
