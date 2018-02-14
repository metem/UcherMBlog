import { Injectable } from '@angular/core';
import { Article } from "../models/article";
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ArticlesRepositoryService {
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
      return this.http.get<Article[]>('/assets/articles/articles.json');
  };

  getArticleContent(article: Article): Observable<string> {
      return this.http.get('/assets/articles' + article.data, { responseType: 'text' });
  };
}
