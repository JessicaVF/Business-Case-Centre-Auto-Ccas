import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {

  quickStats!:any;

  constructor(private adminService: AdminService, private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {

    this.adminService.getQuickStats().subscribe
    ( data => {
      this.quickStats = data;
      }
    );
    this.checkIfAdmin();

  }

  checkIfAdmin() {
    if(this.authService.getIfAdminInStorage() != "true"){
      this.route.navigate(['login']);
    }
  }
}
