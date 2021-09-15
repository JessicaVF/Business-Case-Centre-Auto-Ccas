import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  link = "";


  constructor(private http: HttpClient) { }

  getQuickStats(){
    this.link = "http://127.0.0.1:8000/admin/quickStats";
    return this.http.get<any[]>(this.link);
  }
  getAllGarages(){
    this.link = "http://127.0.0.1:8000/admin/allGarages";
    return this.http.get<any[]>(this.link);
  }
  getAllAnnonces(){
    this.link = "http://127.0.0.1:8000/admin/allAnnonces";
    return this.http.get<any[]>(this.link);
  }
  getAll(){
    this.link = "http://127.0.0.1:8000/admin/allUsers";
    return this.http.get<User[]>(this.link);
  }
}
