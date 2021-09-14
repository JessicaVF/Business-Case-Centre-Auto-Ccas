import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Garage } from '../models/garage.model';

@Component({
  selector: 'app-manage-garages-admin',
  templateUrl: './manage-garages-admin.component.html',
  styleUrls: ['./manage-garages-admin.component.css']
})
export class ManageGaragesAdminComponent implements OnInit {

  garages!:any[];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.adminService.getAllGarages().subscribe(data => this.garages = data);

  }

}
