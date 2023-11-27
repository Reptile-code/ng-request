import { Inject, Injectable } from '@angular/core';

// Rxjs
import { BehaviorSubject, firstValueFrom } from 'rxjs';

// Services
import { RequestHttpService } from './request/request-http.service';

// Models
import Member from '@core/models/member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private _members = new BehaviorSubject<Member[]>([]);

  currentMembers$ = this._members.asObservable();
  constructor(private _requestHttpService: RequestHttpService) {}

  async fetchTeams() {
    try {
      await firstValueFrom(this._requestHttpService.fetchAllTeams())
        .then((data) => {
          console.log(data);
          this._members.next(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
