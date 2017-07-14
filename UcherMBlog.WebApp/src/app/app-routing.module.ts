import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleShowComponent } from './articles/article-show/article-show.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
    { path: '', component: ArticlesListComponent },
    {
        path: 'article',
        children:
        [
            { path: ':title', component: ArticleShowComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {
}