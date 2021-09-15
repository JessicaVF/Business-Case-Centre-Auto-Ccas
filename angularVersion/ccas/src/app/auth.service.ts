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
  setTokenInStorage(data: any) {
    sessionStorage.setItem("token", data);
  }
  getTokenInStorage(): any {
    return sessionStorage.getItem("token");
  }
  setUsernameInStorage(data:any){
    sessionStorage.setItem("username", data);
  }
  getUsernameInStorage(): any {
    return sessionStorage.getItem("username");
  }
  isAdmin(): any {
    const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
    this.link = "http://127.0.0.1:8000/api/auth/isAdmin"
    return this.http.get<boolean>(this.link, { headers });

  }
}
