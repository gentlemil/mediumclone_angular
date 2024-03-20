import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';
import { CommentsResponseInterface } from './commentsResponse.interface';

export interface CommentsStateInterface {
  isLoading: boolean;
  errors: BackendErrorsInterface | null;
  data: CommentsResponseInterface | null;
}
