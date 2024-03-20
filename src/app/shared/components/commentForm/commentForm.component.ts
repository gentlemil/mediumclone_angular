import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessages } from '../backendErrorMessages/backendErrorMessages.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { CommentFormValuesInterface } from './types/commentFormValues.interface';

@Component({
  selector: 'mc-comment-form',
  templateUrl: './commentForm.component.html',
  standalone: true,
  imports: [BackendErrorMessages, ReactiveFormsModule, CommonModule],
})
export class CommentFormComponent {
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrorsInterface | null = null;

  @Output() commentSubmit = new EventEmitter<CommentFormValuesInterface>();

  form = this.fb.nonNullable.group({
    content: '',
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    const formValue = this.form.getRawValue();
    const commentFormValues: CommentFormValuesInterface = {
      ...formValue,
    };

    this.commentSubmit.emit(commentFormValues);
  }
}
