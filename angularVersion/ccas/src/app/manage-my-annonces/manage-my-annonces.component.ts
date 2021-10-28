import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { AuthService } from '../auth.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-manage-my-annonces',
  templateUrl: './manage-my-annonces.component.html',
  styleUrls: ['./manage-my-annonces.component.css']
})
export class ManageMyAnnoncesComponent implements OnInit {

  annonces:Annonce[]=[];
  constructor(private annonceService : AnnonceService, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.getAnnouncesByUser();
    this.checkIfLogin();
  }

  getAnnouncesByUser():void {
    this.annonceService.getAllByUser().subscribe( data => this.annonces = data);

  }
  checkIfLogin(){
      if(this.authService.getIsLoginIfInStorage() != "true"){
        this.route.navigate(['login']);
      };
  }
}
