import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app/app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
    ],
    imports: [
        SharedModule.forRoot(),
        CoreModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', loadChildren: './articles/articles.module#ArticlesModule' }
        ])
    ],
    providers: [],
})
export class AppModuleShared {
}
