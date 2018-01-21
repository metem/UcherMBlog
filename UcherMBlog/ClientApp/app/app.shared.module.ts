import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { ArticleShowComponent } from './components/articles/article-show/article-show.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppComponent } from './components/app/app.component';
import { SlugFilter } from "./components/filters/slug";
import { ArticlesRepositoryService } from "./components/shared/articles-repository.service";

@NgModule({
    declarations: [
        AppComponent,
        ArticlesListComponent,
        ArticleShowComponent,
        NavigationComponent,
        FooterComponent,
        SlugFilter
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: ArticlesListComponent },
            {
                path: 'article',
                children:
                [
                    { path: ':title', component: ArticleShowComponent }
                ]
            }
        ])
    ],
    providers: [ArticlesRepositoryService, SlugFilter],
})
export class AppModuleShared {
}
