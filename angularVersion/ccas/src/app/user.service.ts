import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  link = "";
  User!:User[];
  // headerss = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };

  constructor(private http: HttpClient) { }

  add(user:any){
    this.link = "http://127.0.0.1:8000/user/create";
    return this.http.post<any[]>(this.link, user);
  }
  getAll(){
    this.link = "http://127.0.0.1:8000/user/all";
    return this.http.get<User[]>(this.link);
  }
  getOne(id?: number): Observable<User>{
    if(id){
      this.link = 'http://127.0.0.1:8000/api/user/show' + '/'+ id;

    }
    else{
      this.link = 'http://127.0.0.1:8000/api/user/show'
    }
    const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
    // return this.http.get<User>(this.link + "/"+ id)
    return this.http.get<User>(this.link, { headers })

  }
  edit(user:User, id:number){
    this.link = "http://127.0.0.1:8000/user/edit/" + id;
    return this.http.patch<User[]>(this.link, user);
  }
  changePassword(formInfo:any, id:number){
    const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
    this.link = "http://127.0.0.1:8000/api/user/editPassword/" + id ;
    return this.http.patch<any[]>(this.link, formInfo, { headers });
  }
  delete(id:number){
    this.link = "http://127.0.0.1:8000/user/delete/" + id;

    return this.http.delete(this.link);
  }
  test(){
    this.link ="http://127.0.0.1:8000/api/user/test";
    const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
    return this.http.get<User>(this.link, { headers })
  }

}
