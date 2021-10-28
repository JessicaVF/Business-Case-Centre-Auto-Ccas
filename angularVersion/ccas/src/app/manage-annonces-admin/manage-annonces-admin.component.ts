import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AnnonceService } from '../annonce.service';
import { AuthService } from '../auth.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-manage-annonces-admin',
  templateUrl: './manage-annonces-admin.component.html',
  styleUrls: ['./manage-annonces-admin.component.css']
})
export class ManageAnnoncesAdminComponent implements OnInit {

  annonces:Annonce[]=[];
  constructor(private adminService: AdminService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {

    this.getAllAnnonces();
    this.checkIfAdmin();

  }
  getAllAnnonces():void{
    this.adminService.getAllAnnonces().subscribe( data => this.annonces = data);
  }
  checkIfAdmin() {
    if(this.authService.getIfAdminInStorage() != "true"){
      this.route.navigate(['login']);
    }
  }

}
