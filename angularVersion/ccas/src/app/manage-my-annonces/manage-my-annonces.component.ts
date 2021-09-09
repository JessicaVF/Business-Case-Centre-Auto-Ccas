import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-manage-my-annonces',
  templateUrl: './manage-my-annonces.component.html',
  styleUrls: ['./manage-my-annonces.component.css']
})
export class ManageMyAnnoncesComponent implements OnInit {

  annonces:Annonce[]=[];
  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.getAnnouncesByUser();
  }

  getAnnouncesByUser():void{
    this.annonceService.getAllByUser().subscribe( data => this.annonces = data);
  }

}
