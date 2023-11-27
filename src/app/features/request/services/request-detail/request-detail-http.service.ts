import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import RequestDetails from '@feautes/request/models/request-details.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestDetailHttpService {
  constructor(private _httpClient: HttpClient) {}

  fetchRequestDetails(id: number): Observable<RequestDetails[]> {
    const response = this._httpClient
      .get<RequestDetails[]>('assets/json/request-details.json')
      .pipe(
        map((data) => {
          return data.filter((request) => request.id === id);
        })
      );
    return response;
  }
}
