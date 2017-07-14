import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleShowComponent } from './articles/article-show/article-show.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

import { ArticlesRepositoryService } from './shared/articles-repository.service';
import { SlugFilter } from "./filters/slug";

@NgModule({
    declarations: [
        AppComponent,
        ArticlesListComponent,
        ArticleShowComponent,
        NavigationComponent,
        FooterComponent,
        TextEditorComponent,
        SlugFilter
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],
    providers: [ArticlesRepositoryService, SlugFilter],
    bootstrap: [AppComponent]
})
export class AppModule {
}