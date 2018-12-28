import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(email, password){
    //post details to server and return user info
    return this.http.post('/api',{
      email,
      password
    })
  }
}
