import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { routerTransition } from "../../app-routing.animations";

@Component({
    selector: 'app-categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})
export class CategoriesListComponent implements OnInit {

    public categories: Category[];

    constructor() {
        this.categories = [
            { id: 1, name: "abc" },
            { id: 2, name: "abc2" }
        ];
    }

    ngOnInit() {
    }

}