import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CommentInterface } from '../../shared/types/comment.interface';
import { CommentRequestInterface } from '../../shared/types/commentRequest.interface';
import { CommentResponseInterface } from '../../shared/types/commentResponse.interface';

@Injectable()
export class CreateCommentService {
  constructor(private http: HttpClient) {}

  createComment(
    articleRequest: CommentRequestInterface,
    slug: string
  ): Observable<CommentInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}/comments/add`;

    return this.http
      .post<CommentResponseInterface>(fullUrl, articleRequest)
      .pipe(map((response) => response.comment));
  }
}
