import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  annonces:Annonce[]=[];

  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {

    this.getAnnounces();
      this.annonceService.currentAnnonces.subscribe(annonces => this.annonces = annonces);
  }

  getAnnounces():void{

    this.annonceService.getAll().then( data => this.annonces = data);
}


}
