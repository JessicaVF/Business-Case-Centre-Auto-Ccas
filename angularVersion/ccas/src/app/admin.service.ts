import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
