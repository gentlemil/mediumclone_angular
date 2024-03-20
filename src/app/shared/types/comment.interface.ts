import { ArticleInterface } from './article.interface';
import { ProfileInterface } from './profile.interface';

export interface CommentInterface {
  content: string;
  createdAt: string;
  updatedAt: string;
  user: ProfileInterface;
  article: ArticleInterface;
}
