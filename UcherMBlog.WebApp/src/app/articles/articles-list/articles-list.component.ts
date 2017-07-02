import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../../models/article';
import { routerTransition } from "../../app-routing.animations";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class ArticlesListComponent implements OnInit {

    public articles: Article[];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params['name'];
        this.articles = [
            {
                id: 1,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },
                        {
                id: 2,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },
                        {
                id: 3,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },            {
                id: 4,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },
                        {
                id: 5,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },
                        {
                id: 6,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },
                        {
                id: 7,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            },            {
                id: 8,
                title: "example title",
                dateCreated: new Date(),
                authorName: "example author",
                content: ""
            }
        ]
    }

}