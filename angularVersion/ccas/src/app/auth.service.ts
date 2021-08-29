import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link="";
  isLogin = false;

  constructor(private http: HttpClient) { }

  login(loginData: any){
    this.link = "http://127.0.0.1:8000/api/login_check";
    return this.http.post<any[]>(this.link, loginData);
  }
  loginChangeStatus(){
    this.isLogin = !this.isLogin;
  }
  loginStatus(){
    return this.isLogin;
  }
}
