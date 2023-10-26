import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primefaces
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {}
