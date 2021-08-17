import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  link = "";
  constructor(private http: HttpClient) { }

  add(user:any){
    this.link = "http://127.0.0.1:8000/user/create";
    return this.http.post<any[]>(this.link, user);

  }
  getAll(){
    this.link ="http://127.0.0.1:8000/user/all"
    return this.http.get<User[]>(this.link);
  }
}
