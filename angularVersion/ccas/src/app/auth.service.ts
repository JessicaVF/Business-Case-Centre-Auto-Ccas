import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link="";
  isLogin = false;
  adminStatus: boolean = false;

  private logStatusSource = new BehaviorSubject(this.isLogin)
  logStatus = this.logStatusSource.asObservable();


  constructor(private http: HttpClient) { }

  login(loginData: any){
    this.link = "http://127.0.0.1:8000/api/login_check";
    return this.http.post<any[]>(this.link, loginData);
  }
  loginChangeStatus(){
    this.isLogin = !this.isLogin;
    this.logStatusSource.next(this.isLogin)
    console.log(this.isLogin, "isLogin");


  }
  getLoginStatus(){
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
  checkIfAdmin(data: any){
    if(data.length == 2){
      sessionStorage.setItem("isAdmin", "true");
    }
    //else erase "isadmin"NOTA FOR ME
  }
  getIfAdminInStorage(): any {
    return sessionStorage.getItem("isAdmin");
  }
  setIsLoginInStorage(): any{
    sessionStorage.setItem("isLogin", "true");
  }
  getIsLoginIfInStorage():any{
    return sessionStorage.getItem("isLogin");
  }

}
