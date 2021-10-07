import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.css']
})
export class LogButtonComponent implements OnInit {
  isLogin!:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logStatus.subscribe(data => this.isLogin = data)
  }

  logout(){

  }

}
