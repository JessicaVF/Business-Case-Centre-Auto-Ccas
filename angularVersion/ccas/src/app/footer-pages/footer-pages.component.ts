import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer-pages',
  templateUrl: './footer-pages.component.html',
  styleUrls: ['./footer-pages.component.css']
})
export class FooterPagesComponent implements OnInit {

  title!:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
  }

}
