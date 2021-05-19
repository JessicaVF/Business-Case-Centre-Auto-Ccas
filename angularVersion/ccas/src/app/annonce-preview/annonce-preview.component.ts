import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-annonce-preview',
  templateUrl: './annonce-preview.component.html',
  styleUrls: ['./annonce-preview.component.css']
})
export class AnnoncePreviewComponent implements OnInit {
  @Input() annonce!:Annonce;
  constructor() { }

  ngOnInit(): void {
    console.log(this.annonce.prix)
  }

}
