import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {

  quickStats!:any;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {

    this.adminService.getQuickStats().subscribe
    ( data => {
      this.quickStats = data;
      }
    );
  }


}
