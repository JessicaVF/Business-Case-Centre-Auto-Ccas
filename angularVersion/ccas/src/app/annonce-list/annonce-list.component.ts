import { Component, Input, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {


  @Input() annonces: Annonce[]=[];
  @Input() atHome:any;

  p: number = 1;

  constructor() {
   }

  ngOnInit(): void {


  }

}
