import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';

// Components
import { FormRequestComponent } from '../form-request/form-request.component';
@Component({
  selector: 'app-modal-request',
  standalone: true,
  imports: [CommonModule, DialogModule, DividerModule, FormRequestComponent],
  templateUrl: './modal-request.component.html',
  styleUrls: ['./modal-request.component.css'],
})
export class ModalRequestComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() modalIsOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onCloseModal() {
    // Lógica para cerrar el modal
    this.modalIsOpen.emit(false);
  }
}
