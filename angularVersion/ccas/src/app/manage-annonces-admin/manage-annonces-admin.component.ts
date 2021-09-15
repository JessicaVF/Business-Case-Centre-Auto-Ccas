import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-manage-annonces-admin',
  templateUrl: './manage-annonces-admin.component.html',
  styleUrls: ['./manage-annonces-admin.component.css']
})
export class ManageAnnoncesAdminComponent implements OnInit {

  annonces:Annonce[]=[];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.getAllAnnonces();

  }
  getAllAnnonces():void{
    this.adminService.getAllAnnonces().subscribe( data => this.annonces = data);
  }

}
