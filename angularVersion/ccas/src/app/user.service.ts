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

  constructor(private http: HttpClient) { }

  add(user:any){
    this.link = "http://127.0.0.1:8000/user/create";
    return this.http.post<any[]>(this.link, user);
  }
  getAll(){
    this.link = "http://127.0.0.1:8000/user/all";
    return this.http.get<User[]>(this.link);
  }
  getOne(id: number): Observable<User>{
    this.link = 'http://127.0.0.1:8000/user/show';
    return this.http.get<User>(this.link + "/"+ id)
  }
  edit(user:User, id:number){
    this.link = "http://127.0.0.1:8000/user/edit/" + id;
    return this.http.patch<User[]>(this.link, user);
  }
  delete(id:number){
    this.link = "http://127.0.0.1:8000/user/delete/" + id;

    return this.http.delete(this.link);
  }
}
