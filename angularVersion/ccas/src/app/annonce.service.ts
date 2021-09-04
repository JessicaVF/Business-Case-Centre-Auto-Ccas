import { Injectable } from '@angular/core';
import { Annonce } from './models/annonce';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { isLoweredSymbol } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
link = "";
annonce!: Annonce[];
annonces!: Annonce[];



private annoncesSource = new BehaviorSubject(this.annonces);
currentAnnonces = this.annoncesSource.asObservable();

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
  getFuelTypes(): Promise<any[]>{
    this.link = 'http://127.0.0.1:8000/fueltype';
    return this.http.get<any[]>(this.link).toPromise();
  }

  async getByUserSelection(value: Annonce): Promise<any[]> {

    this.link= 'http://127.0.0.1:8000/annonce/search';
    this.annonces= await this.http.post<any[]>(this.link, value).toPromise();
    this.annoncesSource.next(this.annonces)
    return this.annonces;
  }
  add(annonce:any){
    this.link = "http://127.0.0.1:8000/annonce/create";
    return this.http.post<any[]>(this.link, annonce);
  }
}
