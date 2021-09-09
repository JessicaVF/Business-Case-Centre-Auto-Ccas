import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from './models/garage.model';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  link = "";
  constructor(private http: HttpClient) { }

  getAllByUser(id?: number){
    const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
    if(id){
      this.link = "http://127.0.0.1:8000/api/garage/allByUser/"+ id;
    }
    else{
      this.link = "http://127.0.0.1:8000/api/garage/allByUser/";
    }

    return this.http.get<Garage[]>(this.link, {headers});
  }

edit(infoToSend:any, id:number){
  // const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
  this.link = "http://127.0.0.1:8000/garage/edit/" + id;
  return this.http.patch<any[]>(this.link, infoToSend);
}

delete(id:number){
  this.link = "http://127.0.0.1:8000/garage/delete/" + id;

  return this.http.delete(this.link);
}
add(infoToSend:any){
  const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
  this.link = "http://127.0.0.1:8000/api/garage/create";
  return this.http.post<any[]>(this.link, infoToSend, {headers});
}
}
