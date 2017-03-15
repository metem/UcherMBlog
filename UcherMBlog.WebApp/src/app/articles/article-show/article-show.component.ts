import { Component, OnInit } from '@angular/core';
import { Article } from "../../models/article";
import { routerTransition } from "../../app-routing.animations";

@Component({
    selector: 'app-article-show',
    templateUrl: './article-show.component.html',
    styleUrls: ['./article-show.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class ArticleShowComponent implements OnInit {
    article: Article;

    constructor() {}

    ngOnInit() {
        this.article = {
            id: 1,
            authorName: "test",
            title: "test title",
            content: "test content",
            dateCreated: new Date()
        };
    }

}