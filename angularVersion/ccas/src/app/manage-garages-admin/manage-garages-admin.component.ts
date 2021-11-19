import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { Garage } from '../models/garage.model';

@Component({
  selector: 'app-manage-garages-admin',
  templateUrl: './manage-garages-admin.component.html',
  styleUrls: ['./manage-garages-admin.component.css']
})
export class ManageGaragesAdminComponent implements OnInit {

  garages!:any[];
  p: number = 1;
  constructor(private adminService: AdminService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {

    this.adminService.getAllGarages().subscribe(data => this.garages = data);
    this.checkIfAdmin();
  }
  checkIfAdmin() {
    if(this.authService.getIfAdminInStorage() != "true"){
      this.route.navigate(['login']);
    }
  }

}
