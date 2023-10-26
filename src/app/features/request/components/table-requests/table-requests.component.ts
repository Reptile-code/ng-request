import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primeng Modules
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

// Services
import { RequestService } from '../../services/request.service';

//Models
import Request from '../../models/request.model';

@Component({
  selector: 'table-requests',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  providers: [RequestService],
  templateUrl: './table-requests.component.html',
  styleUrls: ['./table-requests.component.css'],
})
export class TableRequestsComponent implements OnInit {
  requestsForTable: Request[] = [];
  constructor(private _requestService: RequestService) {}

  async ngOnInit() {
    await this._requestService.fetchRequests();
    this.requestsForTable = await firstValueFrom(
      this._requestService.currentRequest$
    );
    // .then((data) => {
    //   console.log('Data uploaded: ', data, this.requestsForTable);
    //   this.requestsForTable = data;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Opened Request':
        return 'success';
      case 'Closed Request':
        return 'warning';
      case 'Pending Request':
        return 'danger';
    }
    return 'success';
  }
}
