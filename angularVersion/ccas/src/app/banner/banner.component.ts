import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

isLogin!:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.isLogin = this.authService.getIsLoginIfInStorage();
    this.authService.logStatus.subscribe(data => this.isLogin = data)
    console.log(this.isLogin, "banner");
  }

}
