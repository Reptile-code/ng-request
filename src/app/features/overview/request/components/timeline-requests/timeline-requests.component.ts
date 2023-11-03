import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface EventItem {
  title?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  status?: string;
}
@Component({
  selector: 'requests-timeline',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule, ButtonModule],
  templateUrl: './timeline-requests.component.html',
  styleUrls: ['./timeline-requests.component.css'],
})
export class TimelineRequestsComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        title: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-check',
        status: 'checked',
      },
      {
        title: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-check',
        status: 'checked',
      },
      {
        title: 'Working in',
        date: '15/10/2020 16:15',
        icon: 'pi pi-circle-fill',
        status: 'workingIn',
      },
      {
        title: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-circle',
        status: 'wait',
      },
    ];
  }
}
