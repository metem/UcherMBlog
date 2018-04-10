import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleShowComponent } from './article-show/article-show.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticlesListComponent,
    ArticleShowComponent
  ]
})
export class ArticlesModule { }
