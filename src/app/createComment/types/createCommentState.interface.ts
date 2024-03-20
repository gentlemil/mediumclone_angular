import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';

export interface CreateCommentStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
