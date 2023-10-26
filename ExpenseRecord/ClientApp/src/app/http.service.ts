import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Record } from './record';
//import { REFUSED } from 'dns';
//import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class HttpService {

  private itemsUrl = '/api/ExpenseRecord';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,

    ) { }

  getItems(): Observable<Record[]> {
    return this.http.get<Record[]>('/api/ExpenseRecord');
  }

  insertItems(record:Record){
    
    const createdItem: Record = {
      Id: record.Id,
      Description: record.Description, 
      Type: record.Type,
      Amount: record.Amount,
      Date: record.Date,
    }

    return this.http.post<Record>(this.itemsUrl,createdItem);

  }

  deleteItems(id:string){

    return this.http.delete<Record>(this.itemsUrl+'/'+id);

  }

}
