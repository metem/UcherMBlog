import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { routerTransition } from '../../shared/animations';
import { ArticlesRepositoryService } from '../../core/articles-repository.service';
import { SlugFilter } from '../../shared/filters/slug';
import { Article } from '../../models/article';

@Component({
    selector: 'app-article-show',
    templateUrl: './article-show.component.html',
    styleUrls: ['./article-show.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class ArticleShowComponent implements OnInit {
    article: Article;
    articleContent: string;

    constructor(private route: ActivatedRoute, private articlesRepository: ArticlesRepositoryService, private slugFilter: SlugFilter) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            var title = params['title'];
            this.articlesRepository.getArticles().subscribe(articles => {
                var article = articles.find(item => this.slugFilter.transform(item.title, new Array<string>()) === title) as Article;
                var articleContent = this.articlesRepository.getArticleContent(article).subscribe(data => {
                    this.articleContent = data;
                    this.article = article;
                });
            });
        });
    }
}