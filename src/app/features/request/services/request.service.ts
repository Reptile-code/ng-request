import { Injectable } from '@angular/core';
import { RequestHttpService } from './request-http.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import Request from '../models/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private _requests = new BehaviorSubject<Request[]>([]);

  currentRequest$ = this._requests.asObservable();
  constructor(private _requestHttpService: RequestHttpService) {}

  async fetchRequests() {
    try {
      // await firstValueFrom(this._requestHttpService.fetchAllRequests())
      //   .then((data) => {
      //     console.log(data);
      //     this._requests.next(data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      this._requests.next([
        {
          nameProject: 'BMS',
          person: 'Francisco Suarez',
          area: 'Test',
          state: 'Opened Request',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'Francisco adf Suadsarez',
          area: 'Test',
          state: 'Closed Request',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'Francisco Suadsfsarez',
          area: 'Test',
          state: 'Pending Requests',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'Francadfisco Suarez',
          area: 'Test',
          state: 'Pending Request',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'adad Frasfdncisco Suarez',
          area: 'Test',
          state: 'Closed Request',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'Francisco Suarez',
          area: 'Test',
          state: 'Opened Request',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'Francisco Suarez',
          area: 'Test',
          state: 'Closed Request',
          requestDate: '10/23/2023',
        },
        {
          nameProject: 'BMS',
          person: 'Francisco Suarez',
          area: 'Test',
          state: 'Opened Request',
          requestDate: '10/23/2023',
        },
      ]);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
