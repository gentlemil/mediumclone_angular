import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CommentsResponseInterface } from '../types/commentsResponse.interface';
import { CommentInterface } from '../../shared/types/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments(slug: string): Observable<CommentInterface[]> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}/comments`;
    return this.http
      .get<CommentsResponseInterface>(fullUrl)
      .pipe(map((response) => response.comments));
  }
}
