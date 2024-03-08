import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  templateUrl: './backend-error-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input({ required: true }) backendErrors: BackendErrorsInterface = {};
  errorMessages: string[] = [];

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages: any = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
