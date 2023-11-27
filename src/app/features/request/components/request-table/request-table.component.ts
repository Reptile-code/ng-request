import { firstValueFrom } from 'rxjs';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inject } from '@angular/core';

// Primeng Modules
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Table } from 'primeng/table';

// Services
import { RequestService } from '../../services/request/request.service';
import { RequestDetailService } from '@feautes/request/services/request-detail/request-detail.service';

// Components
import { TimelineRequestsComponent } from '../request-timeline/request-timeline.component';

//Models
import Request from '../../models/request.model';
import { InputTextModule } from 'primeng/inputtext';
import { RequestModalComponent } from '../request-modal/request-modal.component';
import { ModalRequestComponent } from 'src/app/share/components/modal-request/modal-request.component';

@Component({
  selector: 'requests-table',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TagModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TimelineRequestsComponent,
    RequestModalComponent,
    ModalRequestComponent,
  ],
  providers: [RequestService],
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css'],
})
export class TableRequestsComponent implements OnInit, OnChanges {
  requestsForTable: Request[] = [];
  loading: boolean = true;
  visible: boolean = false;
  @Input() searchTable: string = '';
  @ViewChild('dt') dt: Table | undefined;

  constructor(
    @Inject(RequestService) private _requestService: RequestService,
    @Inject(RequestDetailService)
    private _requestDetailService: RequestDetailService
  ) {}

  async ngOnInit() {
    await this._requestService.fetchRequests();
    this.requestsForTable = await firstValueFrom(
      this._requestService.currentRequest$
    );
    this.loading = false;

    // .then((data) => {
    //   console.log('Data uploaded: ', data, this.requestsForTable);
    //   this.requestsForTable = data;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTable'] && changes['searchTable'].currentValue) {
      this.filterTable(); // Call your method here
    }
  }

  filterTable() {
    this.dt?.filterGlobal(this.searchTable, 'contains');
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

  async openModal(id: number) {
    // async openModal(id: number) {
    console.log('inititit'), id;
    await this._requestDetailService.fetchRequestDetails(id);
    this.visible = true;
  }

  onModalClosed(event: boolean) {
    this.visible = event;
  }
}
