import { Injectable } from '@angular/core';
import { Article } from "../models/article";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ArticlesRepositoryService {

  articlesCache: Article[];

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get('/assets/articles/articles.json').map(response => {
      if (!this.articlesCache) {
        var responseJson = response.json();
        this.articlesCache = <Article[]>responseJson.articles;
      }
      return this.articlesCache;
    });
  }

  getArticleContent(article: Article) {
    return this.http.get('/assets/articles' + article.data).map(response => {
      return response.text().toString();
    });
  }
}
