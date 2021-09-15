import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link="";
  isLogin = false;
  adminStatus: boolean = false;
  constructor(private http: HttpClient) { }

  login(loginData: any){
    this.link = "http://127.0.0.1:8000/api/login_check";
    return this.http.post<any[]>(this.link, loginData);
  }
  loginChangeStatus(){
    this.isLogin = !this.isLogin;
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
  }
  getIfAdminInStorage(): any {
    return sessionStorage.getItem("isAdmin");
  }


  // checkIfAdmin(){

  //   const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
  //   this.link = "http://127.0.0.1:8000/api/auth/isAdmin"
  //   return this.http.get<boolean>(this.link, { headers });
  // }
  // setIfAdmin(adminBool: any){
  //   console.log("adminBool", adminBool);
  //   this.adminStatus = adminBool;
  //   console.log("adminStatus1", this.adminStatus);

  //   return this.adminStatus;

  // }
  isAdmin(): any {
    // const headers = { 'Authorization': "Bearer " + sessionStorage.getItem("token") };
    // this.link = "http://127.0.0.1:8000/api/auth/isAdmin"
    // return this.http.get<boolean>(this.link, { headers });
    console.log("adminStatus2",this.adminStatus);
      return this.adminStatus;
  }
}
