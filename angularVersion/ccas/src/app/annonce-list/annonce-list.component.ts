import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';
import { Test } from '../models/test';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {

  annonce!: Annonce[];
  test!: Test[];
  url = "";
  dati:any=[];


  constructor(private annonceService : AnnonceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.annonce = this.annonceService.dummyAll();

    this.url= 'http://127.0.0.1:8000/garage/all';

    this.http.get(this.url).subscribe(data=>{
      this.dati = data});


  }

}
