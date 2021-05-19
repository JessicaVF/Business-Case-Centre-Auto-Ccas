import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {
  annonce!: Annonce;
  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    // this.annonceService.getOne(+id).subscribe( v => {
    //   this.annonce = v;
    // } );
    this.annonce = this.annonceService.getOneDummy(id)
  }

}
