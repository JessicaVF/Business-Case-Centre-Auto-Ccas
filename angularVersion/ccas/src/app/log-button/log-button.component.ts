import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.css']
})
export class LogButtonComponent implements OnInit {
  isLogin:any;
  @Input() atHome:any;
  isAdmin:any;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.isLogin = this.authService.getIsLoginIfInStorage();
    this.isAdmin = this.authService.getIfAdminInStorage();
  }

  logout(){
    this.authService.logout();
    this.route.navigate(['accueil']);
  }

}
