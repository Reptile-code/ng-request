import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';

// Components
import { ModalRequestComponent } from '../../modal-request/modal-request.component';

// Models
import SidebarItem from 'src/app/core/models/sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    ModalRequestComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarItems: SidebarItem[] = [];
  modalVisible: boolean = false;

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

  onModalClosed(isOpen: boolean) {
    this.modalVisible = isOpen;
  }
}
