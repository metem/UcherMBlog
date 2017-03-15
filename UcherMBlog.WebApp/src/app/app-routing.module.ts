import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
    { path: '', component: CategoriesListComponent },
    {
        path: 'category',
        children:
        [
            { path: ':name', component: ArticlesListComponent }
        ]
    },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: AuthLoginComponent },
    {
        path: 'article',
        children:
        [
            { path: 'create', component: ArticleCreateComponent },
            { path: ':id', component: ArticleShowComponent }
        ]
    },
    {
        path: 'auth',
        children:
        [
            { path: 'change-pwd', component: AuthChangePwdComponent },
            { path: 'login', component: AuthLoginComponent },
            { path: 'logout', component: AuthLoginComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {
}