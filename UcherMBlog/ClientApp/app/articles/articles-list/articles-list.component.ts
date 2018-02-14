import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { routerTransition } from '../../shared/animations';
import { ArticlesRepositoryService } from '../../core/articles-repository.service';
import { Observable } from 'rxjs/Observable';
import { Article } from '../../models/article';

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class ArticlesListComponent implements OnInit {
    articles: Observable<Article[]>;

    constructor(private route: ActivatedRoute, private articlesRepository: ArticlesRepositoryService) { }

    ngOnInit() {
        this.articles = this.articlesRepository.getArticles();
    }
}