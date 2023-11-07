import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';

// Components
import { FormRequestComponent } from './../../../../share/components/form-request/form-request.component';

@Component({
  selector: 'request-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, DividerModule, FormRequestComponent],
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css'],
})
export class RequestModalComponent implements OnInit {
  @Input() request = {};
  @Input() isVisible: boolean = false;
  @Output() modalIsOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onCloseModal() {
    // Lógica para cerrar el modal
    this.modalIsOpen.emit(false);
  }
}
