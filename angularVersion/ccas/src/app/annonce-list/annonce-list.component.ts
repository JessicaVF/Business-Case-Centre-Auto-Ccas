import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {

  annonce!: Annonce[];

  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.annonce = this.annonceService.dummyAll();



  }

}
