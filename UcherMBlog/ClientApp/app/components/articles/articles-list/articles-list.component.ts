import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../../models/article';
import { routerTransition } from "../../../animations";
import { ArticlesRepositoryService } from "../../shared/articles-repository.service";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class ArticlesListComponent implements OnInit {
    articles: any;

    constructor(private route: ActivatedRoute, private articlesRepository: ArticlesRepositoryService) { }

    ngOnInit() {
        this.articles = this.articlesRepository.getArticles();
    }
}