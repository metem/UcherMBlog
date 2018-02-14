import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleShowComponent } from './article-show/article-show.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
    { path: '', component: ArticlesListComponent, pathMatch: 'full' },
    {
        path: 'article',
        children:
        [
            { path: ':title', component: ArticleShowComponent }
        ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
