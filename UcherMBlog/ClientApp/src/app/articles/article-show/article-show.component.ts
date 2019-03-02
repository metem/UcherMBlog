import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../shared/animations';
import { ArticlesRepositoryService } from '../../core/articles-repository.service';
import { SlugFilter } from '../../shared/filters/slug';
import { IArticle } from '../../models/article';
import { InitParams, FacebookService } from 'ngx-facebook';

@Component({
    selector: 'app-article-show',
    templateUrl: './article-show.component.html',
    styleUrls: ['./article-show.component.scss'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class ArticleShowComponent implements OnInit {
    article: IArticle;
    articleContent: string;

    constructor(private route: ActivatedRoute,
      private articlesRepository: ArticlesRepositoryService,
      private slugFilter: SlugFilter,
      private fb: FacebookService) {
      let initParams: InitParams = {
        appId: '961669753990368',
        xfbml: true,
        version: 'v2.12'
      };

      fb.init(initParams);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var title = params['title'];
            this.articlesRepository.getArticles().subscribe(articles => {
                var article = articles.find(item => this.slugFilter.transform(item.title, new Array<string>()) === title) as IArticle;
                this.articlesRepository.getArticleContent(article).subscribe(data => {
                    this.articleContent = data.replace(/"([\w,\s-]+.png)"/gi, `"/assets/articles${article.path}$1"`);
                    this.article = article;
                });
            });
        });
    }
}
