import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../share/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from '../share/components/layout/header/header.component';
import { FooterComponent } from '../share/components/layout/footer/footer.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {}
