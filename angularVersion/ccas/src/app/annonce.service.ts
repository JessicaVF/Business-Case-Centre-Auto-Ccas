import { Injectable } from '@angular/core';
import { Annonce } from './models/annonce';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isLoweredSymbol } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
annonce!: Annonce[];

link = "";

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any[]> {
    this.link= 'http://127.0.0.1:8000/annonce/all';
    return await this.http.get<any[]>(this.link).toPromise();
  }

  getOne(id: number): Observable<Annonce>{
    this.link = 'http://127.0.0.1:8000/annonce/show';
    return this.http.get<Annonce>(this.link + "/"+ id)
  }
  getMakes(): Promise<any[]>{
    this.link = 'http://127.0.0.1:8000/make';
    return this.http.get<any[]>(this.link).toPromise();
  }
  getModelsByMake(id: number): Promise<any[]>{
    this.link = 'http://127.0.0.1:8000/make';
    return this.http.get<any[]>(this.link+ "/"+ id+"/models").toPromise();
  }

}

