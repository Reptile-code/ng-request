import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Request from '../models/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestHttpService {
  constructor(private _httpClient: HttpClient) {}

  fetchAllRequests(): Observable<Request[]> {
    const response = this._httpClient
      .get<Request[]>('assets/json/request.json')
      .pipe(
        map((data) => {
          return data;
        })
      );
    return response;
  }
}
