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
  message!:string;

  constructor(private annonceService : AnnonceService, private http: HttpClient) {
   }

  ngOnInit(): void {
      this.getAnnounces();

      //example of observable with a simple string "message"
      console.log("in annonce list");
      this.annonceService.currentMessage.subscribe(message => this.message = message);
      console.log(this.message);


      //Our version for annonces
      this.annonceService.currentAnnonces.subscribe(annonces => this.annonces =annonces);
      console.log("aca");
      console.log(this.annonces);


  }
  getAnnounces():void{

        this.annonceService.getAll().then( data => this.annonces = data);
  }

  logIt(){
    console.log("in log it");

    console.log(this.annonces);
  }
}
