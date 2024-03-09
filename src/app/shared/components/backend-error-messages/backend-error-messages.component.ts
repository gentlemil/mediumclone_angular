import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  templateUrl: './backend-error-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
})
export class BackendErrorMessagesComponent {
  @Input({ required: true }) backendErrors: BackendErrorsInterface | any = [];
}
