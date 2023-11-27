import { Injectable } from '@angular/core';
import RequestDetails from '@feautes/request/models/request-details.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { RequestDetailHttpService } from './request-detail-http.service';

@Injectable({
  providedIn: 'root',
})
export class RequestDetailService {
  private _requestsDetails = new BehaviorSubject<RequestDetails[]>([]);

  currentRequestDetails$ = this._requestsDetails.asObservable();
  constructor(private _requestDetailHttpService: RequestDetailHttpService) {}

  async fetchRequestDetails(id: number) {
    try {
      await firstValueFrom(
        this._requestDetailHttpService.fetchRequestDetails(id)
      )
        .then((data) => {
          console.log(data);
          this._requestsDetails.next(data);
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
