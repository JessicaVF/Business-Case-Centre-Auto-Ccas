import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {

  annonces:Annonce[]=[];

  constructor(private annonceService : AnnonceService, private http: HttpClient) {
   }

  ngOnInit(): void {
      this.getAnnounces();
      this.annonceService.currentAnnonces.subscribe(annonces => this.annonces =annonces);


  }
  getAnnounces():void{

        this.annonceService.getAll().then( data => this.annonces = data);
  }

}
