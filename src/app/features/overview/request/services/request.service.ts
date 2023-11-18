import { Injectable } from '@angular/core';
import { RequestHttpService } from './request-http.service';
import { BehaviorSubject, firstValueFrom, lastValueFrom } from 'rxjs';
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
      await firstValueFrom(this._requestHttpService.fetchAllRequests())
        .then((data) => {
          console.log(data);
          this._requests.next(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
