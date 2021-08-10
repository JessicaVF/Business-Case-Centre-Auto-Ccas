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
localData:any =[];

  constructor(private http: HttpClient) { }

  async getAll(): Promise<any[]> {
    this.link= 'http://127.0.0.1:8000/annonce/all';
    return await this.http.get<any[]>(this.link).toPromise();
  }

  dummyAll(){
    this.link= 'http://127.0.0.1:8000/annonce/all';
    return this.http.get<any[]>(this.link);

  }
  getOne(id: number): Observable<Annonce>{
    this.link = 'http://127.0.0.1:8000/annonce/show';
    return this.http.get<Annonce>(this.link + "/"+ id)
  }
  getOneDummy(id: number){
    // return this.dummyAnnonce[id]
  }
}

