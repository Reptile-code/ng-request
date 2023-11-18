import { firstValueFrom } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// Components

// Services
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { TeamsService } from './../../services/teams.service';

// Models
import Member from '@core/models/member.model';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'request-picklist',
  standalone: true,
  imports: [
    CommonModule,
    PickListModule,
    DragDropModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './request-picklist.component.html',
  styleUrls: ['./request-picklist.component.css'],
})
export class RequestPickListComponent implements OnInit {
  sourceMembers: Member[] = [];
  targetMembers: Member[] = [];

  @Input() isVisible: boolean = false;
  @Output() modalIsOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _teamsService: TeamsService,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService
  ) {}

  async ngOnInit() {
    await this._teamsService.fetchTeams();
    firstValueFrom(this._teamsService.currentMembers$)
      .then((data) => {
        this.sourceMembers = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  confirm() {
    this._confirmationService.confirm({
      message: '¿Estás seguro que deseas enviar la solicitud?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sendRequest();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  sendRequest() {
    if (this.targetMembers.length === 0) {
      this._messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'You dont have any member selected',
      });
    } else {
      console.log('Solicitud enviada');
      this._messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Request sent successfully',
      });
      this.onCloseModal();
    }
  }

  onCloseModal() {
    // Lógica para cerrar el modal
    this.modalIsOpen.emit(false);
  }
}
