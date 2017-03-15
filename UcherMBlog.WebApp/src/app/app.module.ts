import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleShowComponent } from './articles/article-show/article-show.component';
import { AuthChangePwdComponent } from './auth/auth-change-pwd/auth-change-pwd.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesListComponent,
        ArticlesListComponent,
        ArticleCreateComponent,
        ArticleShowComponent,
        AuthChangePwdComponent,
        AuthLoginComponent,
        ContactComponent,
        NavigationComponent,
        FooterComponent,
        TextEditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}