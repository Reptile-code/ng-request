import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import SidebarItem from 'src/app/core/models/sidebar-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarItems: SidebarItem[] = [];

  constructor() {
    this.sidebarItems = [
      {
        label: 'Overview',
        icon: 'pi pi-th-large',
        route: '/overview',
      },
      {
        label: 'Request',
        icon: 'pi pi-folder',
        route: '/request',
      },
      {
        label: 'Teams',
        icon: 'pi pi-users',
        route: '/teams',
      },
      {
        label: 'Notifications',
        icon: 'pi pi-bell',
        route: '/notifications',
      },
    ];
  }
}
