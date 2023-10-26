import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Record } from './record';
//import { REFUSED } from 'dns';
//import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class HttpService {

  private itemsUrl = 'https://localhost:7081/api/ExpenseRecord'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,

    ) { }

  getItems(): Observable<Record[]> {
    return this.http.get<Record[]>(this.itemsUrl);
  }

  insertItems(record:Record){
    
    const createdItem: Record = {
      id: record.id,
      description: record.description, 
      type: record.type,
      amount: record.amount,
      date: record.date,
    }

    return this.http.post<Record>(this.itemsUrl,createdItem);

  }

  deleteItems(id:string){

    return this.http.delete<Record>(this.itemsUrl+'/'+id);

  }

}
