import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Rxjs
import { Observable, map } from 'rxjs';

// Models
import Member from '@core/models/member.model';
import Request from '../../models/request.model';
import RequestDetails from '../../models/request-details.model';

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

  fetchAllTeams(): Observable<Member[]> {
    const response = this._httpClient
      .get<Member[]>('assets/json/person.json')
      .pipe(
        map((data) => {
          return data;
        })
      );
    return response;
  }
}
