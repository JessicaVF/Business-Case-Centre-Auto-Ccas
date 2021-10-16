import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.css']
})
export class LogButtonComponent implements OnInit {
  isLogin:any;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    // this.authService.logStatus.subscribe(data => this.isLogin = data)
    // this.isLogin = this.authService.getLoginStatus();

    this.isLogin = this.authService.getIsLoginIfInStorage();

  }

  logout(){
    this.authService.logout();
    this.route.navigate(['accueil']);
  }

}
