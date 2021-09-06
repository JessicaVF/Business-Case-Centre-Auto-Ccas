import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-manage-my-annonces-by-garages',
  templateUrl: './manage-my-annonces-by-garages.component.html',
  styleUrls: ['./manage-my-annonces-by-garages.component.css']
})
export class ManageMyAnnoncesByGaragesComponent implements OnInit {

  annonces:Annonce[]=[];
  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.getAnnouncesByUser();
  }

  getAnnouncesByUser():void{
    this.annonceService.getAllByUser().subscribe( data => this.annonces = data);
  }

}
