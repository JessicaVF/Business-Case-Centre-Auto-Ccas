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
  testAnnonces:Annonce[]=[];
  message!:string;

  constructor(private annonceService : AnnonceService, private http: HttpClient) {
   }

  ngOnInit(): void {
      this.getAnnounces();

      console.log("in annonce list");
      this.annonceService.currentMessage.subscribe(message => this.message = message);
      console.log(this.message);
      //Lets try
      this.annonceService.currentAnnonces.subscribe(annonces => this.testAnnonces =annonces);
      console.log("aca");

      console.log(this.testAnnonces);


  }
  getAnnounces():void{

        this.annonceService.getAll().then( data => this.annonces = data);
  }
  // testa(){

  //     this.annonceService.test().subscribe( data => {
  //       this.test = data;});
  //       console.log("here");
  //     console.log(this.test);

  // }
  logIt(){
    console.log(this.testAnnonces);
  }
}
