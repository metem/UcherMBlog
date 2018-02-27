import { Injectable } from '@angular/core';
import { IArticle } from "../models/article";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticlesRepositoryService {
  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]> {
      return this.http.get<IArticle[]>('/assets/articles/articles.json');
  };

  getArticleContent(article: IArticle): Observable<string> {
      return this.http.get(`/assets/articles${article.path}article.html`, { responseType: 'text' });
  };
}
