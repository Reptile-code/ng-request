import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

// Components
import { TableRequestsComponent } from './components/request-table/request-table.component';

// Services
import { RequestService } from './services/request.service';

// Models
import RequestType from './models/request-type.model';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableRequestsComponent,
  ],
  providers: [RequestService],
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  typeOfRequest: RequestType[] = [];
  selectedRequest: RequestType | null = null;
  inputSearcher: string = '';
  headerTitle: string = 'All Request';

  ngOnInit() {
    this.typeOfRequest = [
      { name: 'Pending Requests' },
      { name: 'Opened Requests' },
      { name: 'Closed Requests' },
    ];
  }

  filterData(event: any) {
    this.headerTitle = event.value ? event.value.name : this.headerTitle;
  }
}
